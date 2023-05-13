import React from "react";
import { RxCross2 } from "react-icons/rx";
import ReactModal from "react-modal";

function CustomModal({ openModal, closeModal, children }) {
  return (
    <div className="customClass">
      <ReactModal
        className="customClass z-50"
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            minWidth: "500px",
            maxWidth: "864px",
            maxHeight: "80%",
            margin: "auto",
            padding: "20px",
          },
        }}
        isOpen={openModal}
        onRequestClose={closeModal}
      >
        <div className="h-8 flex justify-end w-full">
          <span className="cursor-pointer" onClick={closeModal}>
            <RxCross2 size={20} color="#016BE6" />
          </span>
        </div>
        {children}
      </ReactModal>
    </div>
  );
}

export { CustomModal };
