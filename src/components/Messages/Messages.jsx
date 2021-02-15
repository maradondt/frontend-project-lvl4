/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect, useSelector } from 'react-redux';

// const mapStateToProps = ({ messages: { data } }) => {
//   const props = {
//     messages: data,
//   };
//   return props;
// };

const Messages = () => {
  const selectedMessages = useSelector((state) => {
    const {
      messages: {
        data,
      },
      channels: {
        currentChannelId,
      },
    } = state;
    return data.filter(({ channelId }) => channelId === currentChannelId);
  });

  // eslint-disable-next-line no-shadow
  const renderMessages = (arr) => arr.map(({ userName, text, id }) => (
    <div key={id} className="text-break">
      <b>{userName}:</b> {text}
    </div>
  ));
  return <div className="overflow-auto">{renderMessages(selectedMessages)}</div>;
};

export default connect(null)(Messages);
