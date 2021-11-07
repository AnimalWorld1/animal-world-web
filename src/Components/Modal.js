import React from 'react'
import "../styles/Modal.css"
function Modal(props) {
    if (props.isOpen === false)
      return null
    console.log("working fine")
    const close = (e) =>{
        e.preventDefault()
    
        if (props.onClose) {
          props.onClose()
        }
      }

    return (
      <div>
        <div className="modal">
          {props.children}
        </div>
        <div className="bg_modal" onClick={e => close(e)}/>
      </div>
    )
  }

  


export default Modal;