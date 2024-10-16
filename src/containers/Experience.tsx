const Experience: React.FC = () => {
    return (
        <section className="experience">
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">IT SYSTEMS OPERATIONS TECHNICIAN</dt>
                    <dd className="mt-2 text-sm text-gray-700">
                        <ul>
                            <li>Computer equipment assembler</li>
                            <li>Software configuration</li>
                            <li>Checkout assembler</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">COS 2022 (MARCH)</p>
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">REPAIR TECHNICIAN (SERVICE POINT)</dt>
                    <dd className="mt-2 text-sm text-gray-700">
                        <ul>
                            <li>Diagnosis of software/hardware problems</li>
                            <li>Software maintenance</li>
                            <li>Repair of cell phones, tablets and laptops.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">MEDIAMARKT 09/2023 - 01/2024</p>
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">REPAIR TECHNICIAN (TECHINCAL SERVICE)</dt>
                    <dd className="mt-2 text-sm text-gray-700">
                        <ul>
                            <li>Diagnosis of software/hardware problems</li>
                            <li>Software maintenance</li>
                            <li>Repair of cell phones, tablets and laptops.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">ANOVO (MOVISTAR) 08/2024 - current</p>
                    </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">Finish</dt>
                    <dd className="mt-2 text-sm text-gray-700">Hand sanded and finished with natural oil</dd>
                </div>
            </dl>
        </section >
    );
};

export default Experience;