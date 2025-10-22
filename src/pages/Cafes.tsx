import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cafesByCity, type CityKey, type Cafe } from '../data/cafes'

function statusColor(status: Cafe['status']) {
  switch (status) {
    case 'red':
      return 'bg-red-500'
    case 'orange':
      return 'bg-orange-500'
    case 'green':
      return 'bg-green-500'
  }
}

export default function Cafes() {
  const params = useParams()
  const city = decodeURIComponent(params.city || '') as CityKey
  const cafes = useMemo(() => cafesByCity[city] || [], [city])

  const suggestions = useMemo(() => cafes.filter((c) => c.status === 'green'), [cafes])

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">كوفيهات {city}</h1>
          <Link to="/city" className="text-blue-600 hover:underline">تغيير المدينة</Link>
        </div>

        <div className="space-y-4">
          {cafes.map((cafe) => (
            <div key={cafe.id} className="rounded-xl border p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                {cafe.logo ? (
                  <img src={cafe.logo} alt={cafe.name} className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <span className="text-sm">شعار</span>
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg">{cafe.name}</div>
                <div className={`h-2 mt-2 rounded-full ${statusColor(cafe.status)}`}></div>
                <div className="text-xs text-gray-500 mt-1">{cafe.status === 'red' ? 'زحمة' : cafe.status === 'orange' ? 'متوسط' : 'فاضي'}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <h2 className="text-2xl font-bold mb-3">اقتراحات</h2>
          {suggestions.length === 0 ? (
            <div className="text-gray-500">لا توجد كوفيهات فاضية الآن</div>
          ) : (
            <div className="grid gap-3">
              {suggestions.map((cafe) => (
                <div key={cafe.id} className="rounded-lg border p-4 flex items-center justify-between">
                  <div className="font-medium">{cafe.name}</div>
                  <span className="text-xs text-green-700 bg-green-100 rounded-full px-2 py-1">فاضي</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-500">شيّك قبل تروح</div>
      </div>
    </div>
  )
}
