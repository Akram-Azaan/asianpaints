import React from "react";
import { Form } from "react-bootstrap";

export default function Radio(props) {
  return <Form.Check {...props} type="radio" className={`common-radio ${props.className}`} />;
}
