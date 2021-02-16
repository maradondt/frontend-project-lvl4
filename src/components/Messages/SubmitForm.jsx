import React, { useContext, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import cn from 'classnames';
import UserNameContext from '../../UserNameContext';
import { postMessage } from './MessagesSlice';

const mapDispatch = { postMessage };
const mapStateToProps = ({
  messages: {
    processState,
    errors,
  },
  channels: {
    currentChannelId,
  },
}) => {
  const props = {
    processState,
    errors,
    currentChannelId,
  };
  return props;
};

const SubmitForm = (props) => {
  const {
    // eslint-disable-next-line no-shadow
    postMessage,
    errors,
    processState,
    currentChannelId,
  } = props;

  const inputElem = useRef(null);
  const userName = useContext(UserNameContext);
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const { message } = values;
      await postMessage({ message: { text: message, userName }, currentChannelId });
      resetForm(values);
    },
  });
  const classesInput = cn('mr-2', {
    'is-invalid': processState === 'rejected',
  });

  useEffect(() => {
    if (inputElem.current) {
      inputElem.current.focus();
    }
  });

  const renderErrors = () => errors.map((e) => <>{e}</>);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="d-flex justify-content-between">
        <Form.Control
          ref={inputElem}
          onChange={formik.handleChange}
          id="message"
          name="message"
          value={formik.values.message}
          type="text"
          placeholder="Enter message"
          className={classesInput}
          readOnly={processState === 'pending'}
        />
        <Button disabled={processState === 'pending'} variant="primary" type="submit">Submit</Button>
      </Form.Group>
      <div className="d-block invalid-feedback">
        {renderErrors()}
      </div>
    </Form>
  );
};

export default connect(mapStateToProps, mapDispatch)(SubmitForm);
