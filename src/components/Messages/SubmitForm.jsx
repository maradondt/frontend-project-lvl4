import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
// import { uniqueId } from 'lodash';
import UserNameContext from '../../UserNameContext';
import { postMessage } from './MessagesSlice';

const mapDispatch = { postMessage };
const SubmitForm = (props) => {
  // eslint-disable-next-line no-shadow
  const { postMessage } = props;
  const userName = useContext(UserNameContext);
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const { message } = values;
      await postMessage({ text: message, userName });
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
};

export default connect(null, mapDispatch)(SubmitForm);
