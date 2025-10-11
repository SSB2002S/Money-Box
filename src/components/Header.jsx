const Header = () => {
  return (
    <header
      className='w-full fixed top-0 z-1 bg-emerald-600 text-white px-2 py-3 min-lg:px-40'
      id='home'>
      <div className='container m-auto flex justify-between items-center text-lg'>
        <ul className='flex gap-x-4 mt-1 max-md:hidden'>
          <li>
            <a href='#mainPage' className='hover:text-lime-300 transition-all'>
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href='#budgets&Goals'
              className='hover:text-lime-300 transition-all'>
              الميزانيات
            </a>
          </li>
          <li>
            <a
              href='#budgets&Goals'
              className='hover:text-lime-300 transition-all'>
              الأهداف
            </a>
          </li>
          <li>
            <a
              href='#transaction'
              className='hover:text-lime-300 transition-all'>
              المعاملات
            </a>
          </li>
        </ul>
        <a href='#home'>
          <h1 className='text-2xl font-semibold  hover:transform hover:scale-105 transition-all'>
            money<span className='text-lime-300'>B</span>ox
          </h1>
        </a>
        {/* <div className='flex gap-x-4 mt-1'>
          <a
            href=''
            className='bg-white text-emerald-600  px-2 rounded hover:bg-emerald-600 hover:text-lime-300 transition-all'>
            تسجيل الدخول
          </a>
          <a
            href=''
            className='bg-white text-emerald-600  px-2 rounded hover:bg-emerald-600 hover:text-lime-300 transition-all'>
            تسجيل
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
