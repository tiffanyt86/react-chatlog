import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const updateChat = (id) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        // same as below:
        // return Object.assign({}, entry, { liked: !entry.liked });
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(newEntries);
  };

  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalLikes = calcTotalLikes(entries);

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {chatMessages[0].sender} and {chatMessages[1].sender}
        </h1>
        <section>
          <h2 className="widget" id="heartWidget">
            {totalLikes} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog entries={entries} updateChat={updateChat} />
      </main>
    </div>
  );
};

export default App;
