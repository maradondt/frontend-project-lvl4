import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import UserNameContext from '../UserNameContext';

export default function SubmitForm() {
  const userName = useContext(UserNameContext);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userName);
  // };
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      const { message } = values;
      console.log(JSON.stringify({ message, userName }, null, 2));
      resetForm(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="d-flex justify-content-between">
        <Form.Control
          onChange={formik.handleChange}
          id="message"
          name="message"
          value={formik.values.message}
          type="text"
          placeholder="Enter message"
          className="mr-2"
        />
        <Button variant="primary" type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
