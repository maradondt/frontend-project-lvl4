import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function AddModal(props) {
  const inputElem = useRef();
  const {
    isOpened,
    handleClose,
    action,
  } = props;

  const processStateSelector = useSelector(
    (state) => state.channels.processState,
  );
  const errorsSelector = useSelector(
    (state) => state.channels.errors,
  );

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 3 to 20 characters')
        .min(3, 'Must be 3 to 20 characters')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      action(values.name);
      resetForm(values);
    },
  });

  const renderErrors = (errors) => errors.map((e) => <>{e}</>);
  useEffect(() => {
    if (inputElem.current) {
      inputElem.current.focus();
    }
  });

  return (
    <Modal show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Chanel</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Form.Control
            readOnly={processStateSelector === 'pending'}
            ref={inputElem}
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            isInvalid={formik.touched.name && formik.errors.name}
          />
          <div className="d-block invalid-feedback">
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
            {renderErrors(errorsSelector)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={processStateSelector === 'pending'}
            type="submit"
            variant="primary"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
