export function Sidebar({ isShowSidebar }) {
  return (
    <div>

      <aside id='default-sidebar' className=' h-screen transition-transform -translate-x-full sm:translate-x-0' aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-company'>

          <div className="p-5">
            <img src="/loanmarket.png" alt="" className="w-20 h-20"/>
            {isShowSidebar && <span className='ml-3'>
              <p className='text-white font-semibold'>Yoseph Duna</p>
              <p className='text-white font-light'>Author</p>
            </span>}
            
          </div>

          <ul className='space-y-2 font-medium p-3'>
            <li>
              <a href='/' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <img src='/home.png' alt='' className="h-8 w-8"/>
                {isShowSidebar && <span className='ml-3'>Dashboard</span>}
              </a>
            </li>
            <li>
              <a href='/user' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <img src='/user2.png' alt='' className="h-8 w-8"/> 
                {isShowSidebar && <span className='flex-1 ml-3 whitespace-nowrap'>User Management</span>}
              </a>
            </li>
            <li>
              <a href='/news' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <img src='/news.png' alt='' className="h-8 w-8"/> 
                {isShowSidebar && <span className='flex-1 ml-3 whitespace-nowrap'>News</span>}
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
