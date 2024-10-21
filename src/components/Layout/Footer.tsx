const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 left-0 w-full text-center p-8">
      <div className="mt-2 text-sm text-gray-900 dark:text-gray-100">
        <p>&copy; {new Date().getFullYear()} Matias Tamagni. All rights reserved.</p>
        <p className="mt-4 text-gray-900 dark:text-gray-100">Email: mjtamagni@hotmail.com </p>
        <p className="mt-4 text-gray-900 dark:text-gray-100">Phone: +34 644 599 995</ p>
      </div>
    </footer>
  );
};

export default Footer;