import React from 'react';
// class Modal extends React.Component {
//     render() {
//       const { show, bg} = this.props;
//       // Custom styles: set visibility and backbround color
//       const styles = {
//         modal: {
//           display: (show) ? null : 'none', 
//           backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',     
//         }
//       };
      
//       return (
//         <div className="modal-wrapper" style={styles.modal}>
//           { /* Close Button: invoke callback */ }
//           <span className="glyphicon modal-item"
//               onClick={this.props.onClose}><i class="fas fa-times"></i></span>
//           { /* Content */ }
//           <div className="modal-item">
//               { this.props.children }
//                   </div>
//         </div>
//       )
//     }
//   }
const Modal = ({ handleClose, show, pic }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <img src={pic} alt=""/>
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };


  export default Modal;