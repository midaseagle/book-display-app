import React from 'react';
import Book from './Book';
import './App.css';
import img from './metro2033.jpg'
function App() {
  const handleButtonClick = (title, characters) => {
    console.log(`Book Title: ${title}`);
    console.log('Characters:', characters.join(', '));
  };

  const bookInfo = {
    image: img,
    title: 'Metro 2033',
    description: 'Metro 2033," written by Dmitry Glukhovsky, is a post-apocalyptic science fiction novel set in the tunnels of the Moscow Metro after a nuclear war. The story follows a young man named Artyom as he embarks on a perilous journey through the underground metro system to save his home station from mysterious threats. The novel explores themes of survival, human nature, and the remnants of society in a dark, claustrophobic world filled with danger and intrigue.',
    characters: ['Artyom: The main protagonist of the novel, a young man living in the VDNKh station who embarks on a dangerous mission to save his home from mysterious threats.', 'Hunter: A mysterious and rugged stalker who inspires Artyom to take on his journey. Hunter is experienced in the dangers of the Metro and becomes a mentor figure to Artyom.', 'Miller: The stern and authoritative leader of the Spartan Order, a group dedicated to defending the Metro from various threats. Miller plays a crucial role in Artyoms quest.'],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Display App</h1>
      </header>
      <main>
        <Book
          image={bookInfo.image}
          title={bookInfo.title}
          description={bookInfo.description}
          characters={bookInfo.characters}
          onButtonClick={handleButtonClick}
        />
      </main>
    </div>
  );
}

export default App;