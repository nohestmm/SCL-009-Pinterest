import React from 'react';
import Footerbutton from './Footerbutton';
const Modal = ({ handleClose, show, pic }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className= "button-closemodal">
        <button className = "btn-close " onClick={handleClose}><i className="fas fa-times"></i>
        </button>
        </div>
         <section className="modal-main"> 
        <div className="content-modalheader">
          <div className="content-dotsmodal"><i className="fas fa-ellipsis-h font-sizellipsis"></i></div>
          <div className="content-buttom">
            <button className="modal-button color-send">
            <div><i className="fas fa-upload"></i></div>
            <div className="text-btnsend">Enviar</div>
           </button>
           <button className="modal-button color-save">
            <div><i className="fas fa-thumbtack"></i></div>
            <div className="text-btnsave">Guardar</div>
           </button>      
          </div>
        </div>
        <div className="content-modalimg">
          <div className="divimg-modal">
            <img src={pic} alt="" className="img-modal" />
            </div>
          </div>
           </section>
           <Footerbutton/>
    </div>
  );
};
export default Modal;