import './StatCard.css'


export function StatCard({label,stats}) {
  return (
    <div className='stats-card'>
      <div className='stat-title'>{label}</div>
      <div className='stat-value'>{stats}</div>
    </div>
  )
}