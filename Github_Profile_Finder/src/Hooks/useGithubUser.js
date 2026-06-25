import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

 

  useEffect(() => {

    
  if(!username) {
      return
    }

    async function fetchUser() {

      setIsLoading(true)
      setError(null)
      setUser(null)

      try {

       const response = await fetch(
          `https://api.github.com/users/${username}`
        );
      
       if(!response.ok) {
        throw new Error('User Not Found!')
       }

       const data = await response.json();
       setUser(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()

  }, [username])

    
  return {user, isLoading, error};
}
