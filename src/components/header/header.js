import HeaderCss from './Header.module.css';

export const Header = ({ toggleSidebar }) => {
  return (
    <header className='w-full px-4 flex justify-between items-center'>
      <div className='flex'>
        <button className='p-4' onClick={toggleSidebar}>
          <img src='/hamburger.png' className='h-6 w-6 bg-company rounded p-1' alt='hamburger-icon' />
        </button>
        <div className='p-4 font-bold text-company2'>Loan Market</div>
      </div>

      <div>
        <button className='flex items-center justify-between'>
          <img src='/power.png' alt='Log Out' className='w-4 h-4 mx-4' />

          <span>Log Out</span>
        </button>
      </div>
    </header>
    // <header className={HeaderCss.header}>
    //   <div className={HeaderCss.hamburger} onClick={toggleSidebar}>
    //     {/* <img src='./hamburger.png' alt='hamburger-icon' /> */}
    //     {/* dfghjk */}
    //   </div>
    //   <h6>Loan Market</h6>
    // </header>
  );
};
