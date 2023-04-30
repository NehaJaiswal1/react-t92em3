
import "./style.css";

import React, { useState } from 'react';

const emojis = [
  "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
  "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔",
  "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯",
  "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
  "😔", "😕", "🙃", "🤑", "😲", "🙁", "😖", "😞", "😟", "😤",
  "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱",
  "😳", "🤪", "😵", "😡", "😠", "🤬"
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredEmojis = emojis.filter(emoji => {
    return emoji.includes(searchQuery);
  });

  return (
    <div>
      <h1>Emoji Search</h1>
      <input type="text" placeholder="Search for an emoji" onChange={handleSearchChange} />
      <div>
        {filteredEmojis.map((emoji, index) => (
          <span key={index}>{emoji}</span>
        ))}
      </div>
    </div>
  );
}