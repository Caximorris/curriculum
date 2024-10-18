


const Contact: React.FC = () => {
  return (
    <section className="about-me">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="border-2 rounded-[0.75em] border-black dark:border-white px-10 py-6 shadow-dark-shadow dark:shadow-light-shadow bg-light-teal dark:bg-dark-teal">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Contact</h2>
          <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl pt-2">Full Stack Developer</h2>
          <p className="mt-4 text-gray-900 dark:text-gray-100">Feel free to reach out to me at:</p>
          <p className="mt-4 text-gray-900 dark:text-gray-100">email: mjtamagni@hotmail.com </p>
          <p className="mt-4 text-gray-900 dark:text-gray-100">phone: +34 644 599 995</ p>
        </div>
      </div>
    </section>
  );
};

export default Contact;