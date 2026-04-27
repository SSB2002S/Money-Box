const Header = () => {
  return (
    <header
      className="w-full fixed top-0 z-1 bg-emerald-600 text-white px-2 py-3 min-lg:px-40"
      id="home"
    >
      <div className="container min-lg: m-auto flex justify-between max-md:justify-center items-center text-lg">
        <ul className="flex gap-x-4 mt-1 max-md:hidden">
          <li>
            <a href="#mainPage" className="hover:text-lime-300 transition-all">
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#budgets&Goals"
              className="hover:text-lime-300 transition-all"
            >
              الميزانيات
            </a>
          </li>
          <li>
            <a
              href="#budgets&Goals"
              className="hover:text-lime-300 transition-all"
            >
              الأهداف
            </a>
          </li>
          <li>
            <a
              href="#transaction"
              className="hover:text-lime-300 transition-all"
            >
              المعاملات
            </a>
          </li>
        </ul>
        <a href="#home">
          <h1 className="text-2xl font-semibold: hover:transform hover:scale-105 transition-all">
            money<span className="text-lime-300">B</span>ox
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
