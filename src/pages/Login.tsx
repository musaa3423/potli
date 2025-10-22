import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../lib/firebase'

// Uses shared Firebase auth instance

export default function Login() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      })
    }
  }

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      setupRecaptcha()
      const confirmationResult = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
      window.confirmationResult = confirmationResult
      navigate('/verify')
    } catch (err) {
      alert('حدث خطأ في إرسال رمز التحقق. تأكد من الرقم بشكل صحيح.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">تسجيل الدخول</h1>
        <p className="text-center text-gray-600">سيتم إرسال رمز تحقق إلى رقمك</p>
        <form onSubmit={handleSendCode} className="space-y-4">
          <input
            type="tel"
            required
            placeholder="مثال: +9665XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            dir="ltr"
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg bg-black text-white py-3 hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? '...جاري الإرسال' : 'إرسال الرمز'}
          </button>
        </form>
        <div id="recaptcha-container"></div>
        <div className="text-center">
          <Link to="/">عودة للواجهة</Link>
        </div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier
    confirmationResult: import('firebase/auth').ConfirmationResult
  }
}
