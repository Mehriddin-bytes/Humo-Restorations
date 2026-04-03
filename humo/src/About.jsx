import React from 'react';

const About = () => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <h1>About Us</h1>
      <p>
        Welcome to Humo. We build simple, reliable web experiences with a focus on
        clear design and fast performance.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          To empower users and teams with modern tools and thoughtful interfaces
          that make everyday tasks easier.
        </p>
      </section>
      <section>
        <h2>What We Value</h2>
        <ul>
          <li>Transparency</li>
          <li>Quality</li>
          <li>Responsiveness</li>
          <li>Accessibility</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Reach us at <a href="mailto:info@humo.example">info@humo.example</a> for
          questions or feedback.
        </p>
      </section>
    </main>
  );
};

export default About;

