import './FilterBar.css'

export function FilterBar() {
  return (
    <div className="tab-container">
      {['All','Active','Completed'].map((tab) => {
        return (
          <button key={tab} className="tab-box">{tab}</button>
        )
      })}
    </div>
  )
}