import './TextArea.css'


export function TextArea({inputText,text}) {
  return (
    <div className="textarea-container">
     <textarea
      className='textarea-box'
      onChange={inputText}
      value={text}
      placeholder='Start typing or paste your text here...'
     />
    </div>
  )
}