/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ messages: { data } }) => {
  const props = {
    messages: data,
  };
  return props;
};

const Messages = (props) => {
  const { messages } = props;

  // eslint-disable-next-line no-shadow
  const renderMessages = (arr) => arr.map(({ userName, text, id }) => (
    <div key={id} className="text-break">
      <b>{userName}:</b> {text}
    </div>
  ));
  return <div className="overflow-auto">{renderMessages(messages)}</div>;
};

export default connect(mapStateToProps)(Messages);
