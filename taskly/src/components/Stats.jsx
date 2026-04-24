import './Stats.css'

export function  Stats() {

  return (
    <div className="stats-row">
      <div className="stat-box">
        <span className="stat-number">2</span>
        <span className="stat-label">TOTAL</span>
      </div>
      <div className="stat-box">
        <span className="stat-number">1</span>
        <span className="stat-label">REMAINING</span>
      </div>
      <div className="stat-box">
        <span className="stat-number">1</span>
        <span className="stat-label">COMPLETED</span>
      </div>
    </div>
  )
}