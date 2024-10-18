import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Matias Tamagni</h2>
        <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pt-2">Full Stack Developer</h2>
        <p className="mt-4 text-gray-900 dark:text-gray-100">I am a passionate about science and technology, I have
          always been curious to understand how things work and
          how they can be improved.
          I have excellent problem solving skills and am able to find
          effective and creative solutions in both individual and team
          situations. Furthermore, I have proven leadership skills and
          can lead and motivate teams towards the achievement of
          common goals. I consider myself a very adaptable person
          and able to quickly learn new concepts and technologies.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;