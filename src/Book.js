import React from 'react';
import './Book.css';

const Book = ({ image, title, description, characters, onButtonClick }) => {
  return (
    <div className="book">
      <img src={image} alt={`${title} cover`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button onClick={() => onButtonClick(title, characters)}>Show Book Info</button>
    </div>
  );
};

export default Book;