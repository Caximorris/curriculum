const Portfolio: React.FC = () => {
    return (
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:gap-y-0 lg:grid-cols-2">
            <div className="h-full border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal hover:translate-y-[-0.33em] active:translate-y-0 transform transition-transform ">
                <a href="https://mati-retrogames.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-lg w-90 h-60 mx-auto aspect-[20/9]" src="../../retrogames.png" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Retro Games</h5>
                        <p className="mb-3 font-normal text-gray-800 dark:text-gray-300">An interactive web application for playing classic video games directly in your browser. Currently available: Pong Classic and Tic-tac-toe. Coming soon: Snake.</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Click to visit the page</p>
                    </div>
                </a>
            </div>
            <div className="h-full border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal hover:translate-y-[-0.33em] active:translate-y-0 transform transition-transform ">
                <a href="https://naturalparks.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <img className="rounded-lg w-90 h-60 mx-auto aspect-[20/9]" src="../../naturalparks.png" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Natural Parks</h5>
                        <p className="mb-3 font-normal text-gray-800 dark:text-gray-300">A platform for discovering, uploading, and reviewing natural parks across Europe, complete with an integrated seeder. Sign up to start sharing your favorite parks. Please note, the project may take a moment to load initially as the server starts up.</p>
                        <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">Click to visit the page</p>
                    </div>
                </a>
            </div>
            <a />
        </div>
    );
};

export default Portfolio;