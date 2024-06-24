import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the 24-hour Hackathon</h1>
        <p>
          Join us for an exciting 24-hour hackathon where you can showcase your coding skills, collaborate with others, and create amazing projects.
        </p>
      </header>
      <section className="App-section description-section">
        <h2>What is a Hackathon?</h2>
        <p>
          A hackathon is a time-bound event where participants come together to create innovative solutions, build projects, and learn new skills in a collaborative environment. Whether you're a beginner or an experienced coder, a hackathon is a great way to challenge yourself and work on something new.
        </p>
      </section>
      <section className="App-section rules-section">
        <h2>Rules</h2>
        <ul>
          <li>The hackathon lasts for 24 hours.</li>
          <li>Teams can have up to 4 members.</li>
          <li>All code must be written during the hackathon.</li>
          <li>Projects must be submitted by the end of the hackathon.</li>
          <li>Be respectful and supportive of other participants.</li>
          <li>Have fun and be creative!</li>
        </ul>
        <button onClick={() => alert('Registration form will appear here.')}>Register Now</button>
      </section>
    </div>
  );
}

export default App;
