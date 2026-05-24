import './ProgressBar.css'


export function ProgressBar({progress}) {
  return (
    <div className='progress-bar'>
      <div style={{
        backgroundColor :`${progress > 90 ? 'red' :'#3b82f6'}`  ,
        borderRadius: '8px',
        height: '6px',
        width: `${progress}%`,
        transition : 'width 0.5s'
      }}></div>
    </div>
  )
}