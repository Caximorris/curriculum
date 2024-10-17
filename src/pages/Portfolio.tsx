const Portfolio: React.FC = () => {
    return (
        <div className="Contact">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <section className="portfolio-buttons">
                    <a href="https://naturalparks.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Natural Parks</h2>
                    </a>
                </section>
                <section className="portfolio-buttons">
                    <a href="https://mati-retrogames.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Retro Games</h2>
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Portfolio;