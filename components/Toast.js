import React from 'react'

const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div className={`toast show text-light position-fixed ${bgColor}`} style={{ minWidth: "280px", top: "5px", right: "5px", zIndex: "9" }} data-autohide="false">
      <div className={`toast-header ${bgColor} text-light`}>
        <strong className="mr-auto text-primary">{msg.title}</strong>
        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" onClick={handleShow} style={{ outline: "none" }}>X</button>
      </div>
      <div className="toast-body">
        {msg.msg}
      </div>
    </div>
  )
}

export default Toast
