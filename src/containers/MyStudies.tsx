const MyStudies: React.FC = () => {
    return (
        <section className="studies">
            <div>
                <h2 className="text-3xl tracking-tight text-gray-900 sm:text-3xl pt-2">Studies</h2>
                <div className="my-studies-container mt-4 text-gray-500">
                    <div className="studies-item">
                        <h3>Computer Science</h3>
                        <p>UIB</p>
                    </div>
                    <div className="my-studies-item">
                        <h3>Mechanical Engineer</h3>
                        <p>EHU</p>
                    </div>
                    <div className="my-studies-item">
                        <h3>Full Stack Dev Bootcamp</h3>
                        <p>By Cold Steele (Udemy)</p>
                    </div>
                    <div className="my-studies-item">
                        <h3>Python Bootcamp</h3>
                        <p>By Angela Yu (Udemy)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyStudies;