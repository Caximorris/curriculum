import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="h-full w-full border-2 rounded-[0.75em] border-black dark:border-white px-10  py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal">
      <div>
        <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pt-2">Full Stack Developer</h2>
        <p className="mt-4 text-gray-900 dark:text-gray-100">
          As a Computer Engineer with a passion for web development, I specialize in TypeScript, React, and NestJS to build user-centered, efficient applications. Known for my problem-solving skills, I thrive in both independent and collaborative settings, delivering creative, scalable solutions. I’m adaptable, quick to learn, and committed to continuous improvement—always looking for new ways to add value to my team and projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;