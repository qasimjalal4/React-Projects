
export function Modal({
  isModalOpen,
  setIsModalOpen,
  modalTitle,
  setModalTitle,
  modalDesc,
  setModalDesc,
  onSave,
}) {
  return (
    <>
      {isModalOpen && (
        <div className="inset-0 absolute flex justify-center items-center backdrop-blur-sm bg-black/30">
          <div className="bg-[#ffffff] h-[480px] w-[420px] pl-[29px] pt-[25px] rounded-2xl ">
            <h2 className="text-xl font-bold">New Note</h2>
            <input
              placeholder="Enter your title"
              onChange={(event) => setModalTitle(event.target.value)}
              value={modalTitle}
              className="w-[360px] h-[43px] text-md rounded-lg px-[14px] py-2 border border-[rgb(200, 200, 200)] outline-none
         focus:border-[#1b71fc]  mt-4
         "
            />
            <textarea
              placeholder="Enter your description"
              onChange={(event) => setModalDesc(event.target.value)}
              value={modalDesc}
              className="mt-3 w-[360px] h-[240px] px-4 py-[10px] text-md 
         rounded-lg border border-[rgb(200, 200, 200)] outline-none
          focus:border-[#1b71fc]
         "
            />
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-[10px] px-[20px] rounded-lg font-semibold
            text-[15px] cursor-pointer border border-[rgb(200, 200, 200)]
            bg-[rgb(120, 120, 120)] active:opacity-75 transition-opacity"
              >
                Cancel
              </button>
              <button
                disabled={!modalTitle || !modalDesc}
                onClick={onSave}
                className="py-[11px] px-[28px] rounded-lg font-semibold text-[15px]
             cursor-pointer  border-none bg-[#1b71fc] text-white active:opacity-75 transition-opacity ml-14"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
