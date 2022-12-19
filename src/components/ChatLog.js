import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

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
        />
      );
    });
  };

  return <ul className="chat-log">{getChatLogJSX(props)}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
  updateChat: PropTypes.func,
};

export default ChatLog;
