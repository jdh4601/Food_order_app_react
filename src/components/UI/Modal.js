import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop}>{props.children}</div>;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalsElement = document.getElementById('overlays');

const Modal = props => {
  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalsElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
  </Fragment>;
};

export default Modal;
