import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../lib/firebase'

export default function Verify() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await window.confirmationResult.confirm(code)
      if (result.user) {
        navigate('/city')
      }
    } catch (err) {
      alert('رمز التحقق غير صحيح')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">أدخل رمز التحقق</h1>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            inputMode="numeric"
            required
            placeholder="رمز من 6 أرقام"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            dir="ltr"
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg bg-black text-white py-3 hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? '...جاري التحقق' : 'تحقق'}
          </button>
        </form>
        <div className="text-center">
          <Link to="/login">تغيير الرقم</Link>
        </div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    confirmationResult: import('firebase/auth').ConfirmationResult
  }
}
