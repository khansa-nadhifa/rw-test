export const TabItem = ({ title }) => {
  return (
    <li className='mr-2'>
      <span className='inline-block p-4 text-blue-600 bg-white  rounded-t-lg active  dark:text-blue-500'>{title}</span>
    </li>
  );
};
