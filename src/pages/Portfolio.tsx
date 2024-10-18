const Portfolio: React.FC = () => {
    return (
        <div className="Contact">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:gap-y-0 px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal hover:translate-y-[-0.33em] active:translate-y-0 transform transition-transform translate-y-[-0.2em]">
                    <a href="https://mati-retrogames.onrender.com/">
                        <img className="rounded-lg w-90 h-60" src="../../retrogames.png" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Retro Games</h5>
                            <p className="mb-3 font-normal text-gray-800 dark:text-gray-300">An interactive web page to play videogames directly on your web browser. Currently playable: Pong Classic and Tic-tac-toe. Next game available would be snake.</p>
                         
                        </div>
                    </a>
                </div>
                <div className="border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal hover:translate-y-[-0.33em] active:translate-y-0 transform transition-transform translate-y-[-0.2em]">
                    <a href="https://naturalparks.onrender.com/">
                        <img className="rounded-lg w-90 h-60" src="../../naturalparks.png" alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Natural Parks</h5>
                            <p className="mb-3 font-normal text-gray-800 dark:text-gray-300">A web site to search, upload and review natural parks around Europe (all made with integrated seeder on the original code). Create your accound to start posting your parks. </p>
                        </div>
                    </a>
                </div>
                <a />
            </div>
        </div>
    );
};

export default Portfolio;