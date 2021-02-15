/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { messages } = state;
  return { messages };
};
const Messages = (props) => {
  const { messages, id } = props;
  const renderMessages = (arr) => arr.map(({ userName, text, id }) => (
    <div key={id}>
      <p>
        <b>{userName}:</b> {text}
      </p>
    </div>
  ));
  return <div id={id} className="overflow-auto">{renderMessages(messages)}</div>;
};

export default connect(mapStateToProps)(Messages);
