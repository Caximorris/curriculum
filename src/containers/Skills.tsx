const Skills: React.FC = () => {
    return (
        <section className="border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal">
            <div>
                <dt className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pt-2">Skills</dt>
                <ul className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                    <li>- JavaScript / TypeScript</li>
                    <li>- React</li>
                    <li>- Node.js</li>
                    <li>- Express</li>
                    <li>- Python</li>
                    <li>- C++</li>
                    <li>- MongoDB</li>
                    <li>- PostgreSQL</li>
                    <li>- CSS (Bootstrap, Tailwind)</li>
                    <li>- Docker</li>
                    <li>- GIT</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;