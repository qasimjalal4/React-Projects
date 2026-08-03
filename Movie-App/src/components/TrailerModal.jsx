

const TrailerModal = ({trailer, showTrailer, setShowTrailer, movieTitle}) => {

   

  return (
     <>
       {trailer && showTrailer && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 p-6">
         <div className="relative w-full max-w-4xl">
          <button
           onClick={() => setShowTrailer(false)}
           className="absolute -top-12 -right-2 text-3xl hover:text-red-500"
          >✕</button>

          <div className="aspect-video rounded-lg overflow-hidden">
             <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={`${movieTitle} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
          </div>
         </div>
        </div>
       )}
     </>
  )
}

export default TrailerModal