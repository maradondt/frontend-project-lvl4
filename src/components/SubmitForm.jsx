import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SubmitForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="text" className="d-flex justify-content-between">
        <Form.Control type="text" placeholder="Enter message" className="mr-2" />
        <Button variant="primary" type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
