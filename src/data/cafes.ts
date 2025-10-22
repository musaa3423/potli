export type CafeStatus = 'red' | 'orange' | 'green'

export interface Cafe {
  id: string
  name: string
  logo?: string
  status: CafeStatus
}

export type CityKey = 'عنيزة' | 'بريدة' | 'الرس' | 'البكيرية'

// Mock demo data (could be fetched from an API later)
export const cafesByCity: Record<CityKey, Cafe[]> = {
  'عنيزة': [
    { id: 'c1', name: 'كوفي بون', status: 'green' },
    { id: 'c2', name: 'جلسة المزاج', status: 'red' },
    { id: 'c3', name: 'روست كافيه', status: 'orange' },
  ],
  'بريدة': [
    { id: 'c4', name: 'فاين جرايند', status: 'orange' },
    { id: 'c5', name: 'سقيا', status: 'green' },
    { id: 'c6', name: 'سبشلتي', status: 'red' },
  ],
  'الرس': [
    { id: 'c7', name: 'قهوة الدار', status: 'green' },
    { id: 'c8', name: 'لذة بن', status: 'orange' },
    { id: 'c9', name: 'المذاق', status: 'red' },
  ],
  'البكيرية': [
    { id: 'c10', name: 'كوفي فلان', status: 'red' },
    { id: 'c11', name: 'أمزج', status: 'green' },
    { id: 'c12', name: 'سُكَر', status: 'orange' },
  ],
}
