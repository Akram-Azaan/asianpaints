import React, { useState } from "react";
import {Modal as Dialog} from "react-bootstrap";

export const Modal = (props) => {
  const [show, setShow] = useState(props.show || false);

  const handleClose = () => {
    props?.handleClose?.();
    setShow(false);
  };

    if (!show) return;
    
  return (
    <Dialog show={show} onHide={handleClose} {...props}>
      <Dialog.Header closeButton>
        <Dialog.Title>{props.title}</Dialog.Title>
      </Dialog.Header>

      <Dialog.Body>{props.children}</Dialog.Body>
    </Dialog>
  );
};
