import { useState, useEffect, useRef } from 'react'

export const IMG = {
  logo: '/images/logo-with-brand-name.svg',
  logoFull: '/images/logo-with-full-name.svg',
  logoIcon: '/images/logo.svg',
  heroVideo: '/images/Timeline-1.mov',
  heroBg: '/images/55-emmet.png',
  about: '/images/collegeway-swing-stage-workflow.webp',
  team: '/images/Oybek-aka-collegeway-concrete-refill.webp',
  svcRestoration: '/images/Wall-drop-powerwash.png',
  svcConcrete: '/images/Balcony-rebar.png',
  svcWaterproofing: '/images/PHOTO-2025-09-26-17-40-57.jpg',
  svcEnvelope: '/images/Some-Site.jpg',
  proj1: '/images/6258fd5f-eef9-4cb6-823e-3a169f854eef.JPG',
  proj2: '/images/0e915a7b-e1d1-45ab-b79e-84a800426fc7.JPG',
  proj3: '/images/PHOTO-2025-10-06-18-53-53.jpg',
  proj4: '/images/0cb81c34-2e97-4b64-9cc6-8e300753803b.JPG',
  proj5: '/images/6c416ea1-d78a-4636-b8c5-7e5dcabe64c4.JPG',
  proj6: '/images/fa98df8b-ddb9-477e-87b5-ee970bf8865e.JPG',
  car1: '/images/14446966-09fc-4b6c-982b-0a384e411809.JPG',
  car2: '/images/44dcb91e-382d-4706-a550-6657ef9bd63f.JPG',
  car3: '/images/PHOTO-2025-10-06-18-53-22.jpg',
  car4: '/images/PHOTO-2025-10-06-18-53-22-2.jpg',
  car5: '/images/a1c47c99-75c5-4157-bd32-9d4741638d1d.JPG',
  accredWsps: '/images/wsps.png',
  accredSwa: '/images/swa.jpg',
  accredIhsa: '/images/ihsa.jpg',
  accredWsib: '/images/wsib.svg',
}

export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}
