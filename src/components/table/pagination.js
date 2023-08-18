export function Pagination({ currentPage = 1, totalRange = 60, startRange = 1, endRange = 10, actionPrevious = () => {}, actionNext = () => {} }) {
  return (
    <div className='flex justify-between py-4 px-8'>
      <div className="text-gray-500">
        <span>
          {startRange} - {endRange} of {totalRange}
        </span>
      </div>

      <div>
        <div className='flex'>
          <div className='flex items-center'>
            <span className="text-gray-500">The page you're on </span>
            <button className='flex mx-4 justify-between items-center p-2 border-2 border-company rounded'>
              <span className='mx-4'>{currentPage}</span>
              <img src='/right-arrow-head.png' className='rotate-90 h-4 w-4' alt='Page' />
            </button>
          </div>

          <img src="/dividerline.png" alt="" className="h-11 w-0.5"/>
          <button className='flex px-2 py-3 border-2 border-company mx-4 rounded'>
            <img className='rotate-180	h-4 w-4' src='/right-arrow.png' alt='Next' />
          </button>

          <button className='flex px-2 py-3 border-2 border-company rounded'>
            <img src='/right-arrow.png' alt='Next' className='h-4 w-4' />
          </button>
        </div>
      </div>
    </div>
  );
}
