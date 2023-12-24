import React from "react";

const modal = {
  position: "fixed",
  zIndex: 1,
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
};

const close = {
  position: "absolute",
  top: 15,
  right: 35,
  color: "#f1f1f1",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer",
};

const modalContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  margin: "auto",
};

export const Modal = ({ onOpen, children }) => {
  return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
  return (
    <div style={modal}>
      <span style={close} onClick={onClose}>
        &times;
      </span>
      <div style={modalContent}>
        <p style={{ textAlign: "center"}}>
          Download &nbsp;<span class="material-symbols-outlined">download</span>
          Share &nbsp;<span class="material-symbols-outlined">share</span>
          Info &nbsp;<span class="material-symbols-outlined">info</span>
        </p>
        {children}
      <p style={{display:"inline-flex",textAlign: "justify"}}>
          <span>title: &nbsp;</span>
          <span>dhksfksljfsdsdsk&nbsp;</span>
          <span style={{border:"1px solid white", marginLeft:800}}class="material-symbols-outlined">favorite</span>
          <span style={{border:"1px solid white"}}class="material-symbols-outlined">save</span>
      </p>
      </div>
      </div>
  );
};
