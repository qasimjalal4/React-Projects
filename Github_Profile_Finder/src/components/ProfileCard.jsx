
const ProfileCard = ({user}) => {
  return (
    <div className="border border-[#e2e8f0] bg-white w-[550px] rounded-lg flex justify-center items-center
     h-[320px]
    ">
     
     {!user ? (
      <p className="text-slate-400  text-lg mr-5 ">
        Enter a Github username 
      </p>

     ) : (
     <div className="w-full">
     <div className="  flex  pt-5 pl-4">
      <div className="w-[160px]" >
       <img src={user.avatar_url} height={140} width={140} />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="text-2xl font-bold">
         {user.name}
        </div>
        <div className="text-md text-gray-600">
         @{user.login}
        </div>
        <div className="text-md text-gray-600">
         {user.location}
        </div>
     </div>
    </div>

    <div className=" flex mt-3 ml-3 mr-3  gap-3">
        <div className="flex-1 flex flex-col border border-gray-200 justify-center items-center py-2">
          <span className="font-semibold text-lg">
            Public Repos
          </span>
          <span className="font-medium text-lg text-gray-500">
            {user.public_repos}
          </span>
        </div>
        <div  className="flex-1 flex flex-col border border-gray-200 justify-center items-center py-2">
          <span className="font-semibold text-lg">
            Followers
          </span>
          <span className="font-medium text-lg text-gray-500">
            {user.followers}
          </span>
        </div>
        <div  className="flex-1 flex flex-col border border-gray-200 justify-center items-center py-2">
          <span className="font-semibold text-lg">
            Following
          </span>
          <span className="font-medium text-lg text-gray-500">
            {user.following}
          </span>
        </div>
      </div>
    
      <div className="flex justify-center items-center mt-4 mb-2">
        <a
         href={user.html_url}
         target="_blank"
        >
          <button
           className="bg-[#667eea] text-white px-3 py-[6px] rounded-md hover:opacity-90"
           >View on Github
          </button>
        </a>
      </div>
     </div>
     )}

    </div>
  )
}

export default ProfileCard