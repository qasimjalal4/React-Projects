

export function About() {
  return (
    <div className="max-w-lg flex flex-col items-start mx-auto  mt-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About This Project</h1>
      <p className="text-lg text-gray-900 mb-4 leading-relaxed "> This is a simple 2-page React Router demo to learn the basics of client-side routing.</p>
      <p className="font-semibold text-gray-900 mb-4">What you will learn: </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
       <li>How to set up BrowserRouter</li>
       <li>Creating Routes with Route component</li>
       <li>Using NavLink for navigation</li>
       <li>Using createRoutesFromElements</li>
       <li>Route Parameters with useParams</li>
      </ul>
    </div>
  )
}