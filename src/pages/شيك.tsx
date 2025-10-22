import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">شيّك الألوان</h1>
        <p className="text-xl text-gray-600">شيّك قبل تروح</p>
        <p className="max-w-xl mx-auto text-gray-500">تطبيق بسيط يخبرك حالة الازدحام في الكوفيهات والمطاعم حولك بالألوان.</p>
        <Link to="/login" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 text-lg hover:bg-gray-800 transition-colors">
          ابدأ الآن
        </Link>
      </div>
      <div className="mt-12 text-sm text-gray-500">(شيّك قبل تروح)</div>
    </div>
  )
}
