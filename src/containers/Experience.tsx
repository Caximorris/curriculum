const Experience: React.FC = () => {
    return (
        <section className="border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal">
            <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pb-4">Experience</h2>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900 dark:text-gray-100">HARDWARE TECHNICIAN</dt>
                    <dd className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                        <ul>
                            <li>Computer equipment assembler</li>
                            <li>Software configuration</li>
                            <li>Repair of cell phones, tablets and laptops.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">MJOLNIR 08/2019 - 01/2022</p>
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900 dark:text-gray-100">IT SYSTEMS OPERATIONS TECHNICIAN</dt>
                    <dd className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                        <ul>
                            <li>Computer equipment assembler</li>
                            <li>Software configuration</li>
                            <li>Checkout assembler</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">COS 02/2022 - 04/2022</p>
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900 dark:text-gray-100">REPAIR TECHNICIAN (SERVICE POINT)</dt>
                    <dd className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                        <ul>
                            <li>Diagnosis of software/hardware problems</li>
                            <li>Software maintenance</li>
                            <li>Repair of cell phones, tablets and laptops.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">MEDIAMARKT 09/2023 - 01/2024</p>
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900 dark:text-gray-100">REPAIR TECHNICIAN (TECHINCAL SERVICE)</dt>
                    <dd className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                        <ul>
                            <li>Diagnosis of software/hardware problems</li>
                            <li>Software maintenance</li>
                            <li>Repair of cell phones, tablets and laptops.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">ANOVO 08/2024 - current</p>
                    </dd>
                </div>
            </dl>
        </section >
    );
};

export default Experience;