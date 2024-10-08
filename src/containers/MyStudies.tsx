const MyStudies: React.FC = () => {
    return (
        <section className="my-studies">
            <h2>My Studies</h2>
            <div className="my-studies-container">
                <div className="my-studies-item">
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
        </section>
    );
};

export default MyStudies;