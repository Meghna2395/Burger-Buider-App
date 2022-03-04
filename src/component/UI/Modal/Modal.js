import React from 'react';
import classes from './Modal.module.css'
import Hoc from '../../../hoc/hoc'
import Backdrop from '../Backdrop/Backdrop'




const Modal = (props) => (
    <Hoc>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div style={{ display: props.show ? '' : 'none' }} className={classes.Modal}  >
            {props.children}
            <h3> Total Price : {props.price}  </h3>

            <button
            className={classes.buttonCancel} 
            onClick={props.modalClosed}  > 
            Cancel
            </button>
            <button
             className={classes.buttonContinue} 
             onClick={() => {
                alert("Thank you Have a great Day  ")
                window.location.reload()
            }} >
                 Continue 
            </button>

        </div>
    </Hoc>
)

export default Modal