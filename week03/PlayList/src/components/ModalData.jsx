import ReactDOM from "react-dom";

const ModalData = ({ albumImage, closeModal }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex justify-center items-center z-[99999]"
      style={{ backgroundColor: "rgba(0,0,0,0.8" }}
      onClick={closeModal}
    >
      <div
        className="relative bg-white backdrop-opacity-100 p-6 rounded-lg shadow-lg"
        // onClick={(e) => e.stopPropagation()} // 모달 안 클릭 시 닫힘 방지
      >
        <button
          className="absolute top-2 right-2 text-gray-500 text-xl"
          onClick={closeModal}
        >
          x
        </button>
        <img src={albumImage} className="w-72 h-72 object-cover rounded mb-4" />
      </div>
    </div>,
    document.body
  );
};

export default ModalData;
