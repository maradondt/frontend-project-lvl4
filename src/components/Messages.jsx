/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export default function Messages() {
  const messages = [
    {
      name: 'nickNmae',
      text: 'text',
    },
  ];
  const renderMessages = (arr) => arr.map(({ name, text }) => (
    <div>
      <p>
        <b>{name}:</b> {text}
      </p>
    </div>
  ));
  return <div>{renderMessages(messages)}</div>;
}
