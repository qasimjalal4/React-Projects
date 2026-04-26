import './FilterBar.css'

export function FilterBar({filter,setFilter}) {

  return (
    <div className="tab-container">
      {['All','Active','Completed'].map((tab) => {
        return (
          <button 
           key={tab}
           onClick={() => {
            setFilter(tab)
           }}
           className={`tab-box ${filter === tab? 'active': ''}`}>
            {tab} 
          </button>
        )
      })}
    </div>
  )
}