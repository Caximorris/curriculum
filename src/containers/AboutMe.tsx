import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="hero-content">
        <h1>Matias Tamagni</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="hero-image">
        <img src="/path/to/your-photo.jpg" alt="Your Name" />
      </div>
      <h2>About Me</h2>
      <p>
        I am a passionate about science and technology, I have
        always been curious to understand how things work and
        how they can be improved.
        I have excellent problem solving skills and am able to find
        effective and creative solutions in both individual and team
        situations. Furthermore, I have proven leadership skills and
        can lead and motivate teams towards the achievement of
        common goals. I consider myself a very adaptable person
        and able to quickly learn new concepts and technologies.
      </p>
    </section>
  );
};

export default AboutMe;