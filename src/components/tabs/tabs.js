export function Tabs({ titleList, onSelected, activeTab } = []) {
  return (
    <div>
      <div>
        <ul className='flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 my-4'>
          {titleList &&
            titleList.map((title) => {
              return (
                <li className={activeTab === title ? 'mr-2 border-b-2 border-black' : 'mr-2'} key={title} onClick={() => onSelected(title)}>
                  <span className='inline-block p-4 text-blue-600 bg-white  rounded-t-lg active  dark:text-blue-500'>{title}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
