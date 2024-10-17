const Additional: React.FC = () => {
    return (
        <section className="additional">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-3xl pb-4">Languages</h2>
            <dl>
                <div className="border-t border-gray-200 pt-4">
                    <dd className="mt-2 text-sm text-gray-900">
                        <ul>
                            <li>Spanish - Native</li>
                            <li>Catalan - Native</li>
                            <li>English - Advanced</li>
                            <li>German - Basic</li>
                        </ul>
                    </dd>
                </div>
            </dl>
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-3xl pb-4 pt-6">Additional</h2>
            <dl>
                <div className="border-t border-gray-200 pt-4">
                    <dd className="mt-2 text-sm text-gray-900">
                        <ul>
                            <li>Driving licence: B</li>
                            <li>Own personal car</li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </section >
    );
};

export default Additional;