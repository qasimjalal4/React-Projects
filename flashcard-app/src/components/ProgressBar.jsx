import './ProgressBar.css'

export function ProgressBar({progress}) {
  return (
    <div className='progress-bar'>
     <div style={{
      width: `${progress}%`,
      backgroundColor: '#3b82f6',
      height: '100%',
      borderRadius: '6px',
      transition: 'width 0.5s'

     }}></div>
    </div>
  )
}