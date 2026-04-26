import './Stats.css'

export function  Stats({total,completed,remaining}) {

  return (
    <div className="stats-row">
      <div className="stat-box">
        <span className="stat-number">{total}</span>
        <span className="stat-label">TOTAL</span>
      </div>
      <div className="stat-box">
        <span className="stat-number">{remaining}</span>
        <span className="stat-label">REMAINING</span>
      </div>
      <div className="stat-box">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">COMPLETED</span>
      </div>
    </div>
  )
}