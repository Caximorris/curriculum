const Skills: React.FC = () => {
    const skills = ["JavaScript / TypeScript", "React", "Node.js", "Express", "Python", "C++", "MongoDB", "PostgreSQL", "CSS (Bootstrap, Tailwind)", "Docker", "GIT"];

    return (
        <section className="h-full border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal">
            <div>
                <dt className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pt-2">Skills</dt>
                <ul className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                    {skills.map((skill) => (
                        <li key={skill}>- {skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;