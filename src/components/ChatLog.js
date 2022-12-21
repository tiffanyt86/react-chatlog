import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const getChatLogJSX = (props) => {
    return props.entries.map((entry) => {
      return (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          id={entry.id}
          liked={entry.liked}
          updateChat={props.updateChat}
          sender1={props.sender1}
          sender2={props.sender2}
        />
      );
    });
  };

  return <ul className="chat-log">{getChatLogJSX(props)}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateChat: PropTypes.func.isRequired,
  sender1: PropTypes.string.isRequired,
  sender2: PropTypes.string.isRequired,
};

export default ChatLog;
