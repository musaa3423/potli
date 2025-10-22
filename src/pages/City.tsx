import { useNavigate } from 'react-router-dom'

const cities = [
  { id: 'عنيزة', name: 'عنيزة' },
  { id: 'بريدة', name: 'بريدة' },
  { id: 'الرس', name: 'الرس' },
  { id: 'البكيرية', name: 'البكيرية' },
]

export default function City() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">اختر المدينة</h1>
        <div className="grid grid-cols-2 gap-4">
          {cities.map((c) => (
            <button
              key={c.id}
              onClick={() => navigate(`/cafes/${encodeURIComponent(c.id)}`)}
              className="rounded-xl border px-6 py-4 text-lg hover:bg-gray-50"
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
