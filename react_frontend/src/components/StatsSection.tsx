import { useEffect, useRef, useState } from 'react'
import './StatsSection.css'

const ANIMATION_DURATION = 2200
const FRAME_RATE = 20

interface StatCounterProps {
  target: number
}

function StatCounter({ target }: StatCounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = ANIMATION_DURATION / FRAME_RATE
            const increment = target / steps
            let current = 0

            const tick = () => {
              current += increment
              if (current < target) {
                setValue(Math.floor(current))
                setTimeout(tick, FRAME_RATE)
              } else {
                setValue(target)
              }
            }

            setTimeout(tick, FRAME_RATE)
            observer.unobserve(node)
          }
        })
      },
      { threshold: 0.6 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return <h2 className="counter" ref={ref}>{value.toLocaleString()}</h2>
}

const stats = [
  { icon: 'fa-heart-pulse', target: 1150, label: 'Happy Patients' },
  { icon: 'fa-user-doctor', target: 60, label: 'Specialist Doctors' },
  { icon: 'fa-hospital', target: 30, label: 'Medical Services' },
  { icon: 'fa-hand-holding-medical', target: 150000, label: 'Problems Solved' },
]

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span className="top-accent"></span>
            <div className="stat-icon">
              <i className={`fa-solid ${stat.icon}`}></i>
            </div>
            <StatCounter target={stat.target} />
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
