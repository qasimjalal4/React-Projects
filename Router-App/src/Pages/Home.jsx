
export function Home() {
  return (
    <>
     <div className='mx-auto max-w-md mt-12 flex justify-center flex-col items-start'>
       <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Welcome to Home Page
       </h1>
       <p className="text-lg text-gray-900 mb-4 leading-relaxed">
        This is a simple React Router demo showing how navigation works between pages.
       </p>
       <p className="text-lg text-gray-900 mb-12 leading-relaxed">
        Click the "About" link in the navbar to navigate to About page.
       </p>
       <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition ">
         Go to About
       </button>
     </div>
    </>
  )
}