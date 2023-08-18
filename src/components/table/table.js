import { Pagination } from './pagination';

export function Table({ isShowPagination = true, tableHead, tableData, isShowAction, onDelete, onEdit }) {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {tableHead.map((tableTitle) => {
              return (
                <th scope='col' className='px-6 py-3 bg-company text-white flex-shrink-0'>
                  {tableTitle}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {tableData.map((data) => {
            return (
              <tr className='border-b'>
                {data.map((dat) => {
                  return (
                    <th scope='row' className='px-6 py-4 font-normal whitespace-nowrap dark:text-black'>
                      {dat}
                    </th>
                  );
                })}
                {isShowAction && (
                  <th>
                    <div className='flex'>
                      <button onClick={onEdit} className='py-2 px-5 border-2 border-company mr-2 rounded text-company'>Edit</button>
                      <button onClick={onDelete} className='py-2 px-5 bg-delete rounded text-white'>Delete</button>
                    </div>
                  </th>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>{isShowPagination && <Pagination />}</div>
    </div>
  );
}
