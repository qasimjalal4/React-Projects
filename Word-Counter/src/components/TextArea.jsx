import './TextArea.css'


export function TextArea({onChange,text}) {
  return (
    <div className="textarea-container">
     <textarea
      className='textarea-box'
      onChange={onChange}
      value={text}
      placeholder='Start typing or paste your text here...'
     />
    </div>
  )
}