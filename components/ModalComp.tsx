import React from "react";
import Modal from "react-modal";
function ModalComp() {
  return (
    <Modal
      isOpen={true}
      style={{
        overlay: {
          background: "#0000006d",
        },
        content: {
          padding: "0",
          margin: "0",
          display: "flex",
          background: "transparent",
          border: "none",
        },
      }}
    >
      <div className="bg-zinc-700 h-full hidden sm:flex sm:w-1/2 lg:w-7/12">
        <img src="scenery1.jpg" alt="" className="h-full object-cover " />
      </div>
      <div className="w-full sm:w-1/2 lg:w-5/12 bg-zinc-800 flex justify-center items-center"></div>
    </Modal>
  );
}

export default ModalComp;
