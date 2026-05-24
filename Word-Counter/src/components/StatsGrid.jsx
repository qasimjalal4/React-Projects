import { StatCard } from './StatCard'
import './StatsGrid.css'

export function StatsGrid({stats}) {

  const statItems = [
    {label: 'Words', stats: stats.words},
    {label: 'Chars', stats: stats.chars},
    {label: 'Sentences', stats: stats.sentences}
  ]
  return (
    <div className="grid">
      {statItems.map((card) => {
        return (
          <>
           <StatCard key={card.label} label={card.label} stats={card.stats} />
          </>
        )
      })}
    </div>
  )
}