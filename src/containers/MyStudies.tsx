const MyStudies: React.FC = () => {
    return (
        <section className="studies">
            <div>
                <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pt-2">Studies</h2>
                <div className="my-studies-container mt-4 text-gray-900 dark:text-gray-100">
                    <div className="studies-item">
                        <h3>Computer Science</h3>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">UIB</p>
                    </div>
                    <div className="my-studies-item">
                        <h3>Mechanical Engineer</h3>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">EHU</p>
                    </div>
                    <div className="my-studies-item">
                        <h3>Full Stack Dev Bootcamp</h3>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">By Cold Steele (Udemy)</p>
                    </div>
                    <div className="my-studies-item">
                        <h3>Python Bootcamp</h3>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">By Angela Yu (Udemy)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyStudies;