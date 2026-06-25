import SearchBar from "./components/SearchBar"
import ProfileCard from "./components/ProfileCard"
import { useGithubUser } from "./Hooks/useGithubUser";
import { useState } from "react"

function App() {
  
  const [inputText,setInputText] = useState('')
  const [userName, setUserName] = useState('');

  const {user, isLoading, error} = useGithubUser(userName) 
 
  const onSearch = () => {
    if (!inputText) {
      alert('Enter username!')
      return
    }  

    setUserName(inputText)
    console.log(user)

    setInputText('')
  }

  return (
    <div className="min-h-screen  flex flex-col gap-y-10 justify-center items-center pb-20">
      <SearchBar  inputText={inputText} setInputText={setInputText} onSearch={onSearch} />
      <ProfileCard user={user} userName={userName} /> 
    </div>
  )
}

export default App
