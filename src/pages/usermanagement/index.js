import React, { useState } from 'react';
import style from './index.module.css';

import { Tabs } from '../../components/tabs';

import { USER_TABS_HEADER, EXAMPLE_DATA, TABLE_HEAD, TABLE_HEAD_2, EXAMPLE_DATA_2, TABLE_HEAD_3, EXAMPLE_DATA_3 } from './constants/user.const';
import { Table } from '../../components/table';

function Index() {
  const [activeTab, setActiveTabs] = useState('Customer');

  return (
    <div className={style.body}>

      <div className="flex justify-end items-end">
        <button
          type='button'
          className='bg-company font-normal rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white flex'
        >
          <img src='/adduser.png' alt='' className='h-5 w-5 mr-2'/>
          Add User
        </button>
      </div>
      <div className='bg-white p-10 rounded'>
        <div>
          <form>
            <label for='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                  <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Enter keyword'
                required
              />
              <button
                type='submit'
                className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div >
          <Tabs titleList={USER_TABS_HEADER} onSelected={setActiveTabs} activeTab={activeTab}/>

          {activeTab === 'Customer' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true} />}

          {activeTab === 'Author' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true}/>}

          {activeTab === 'Super Admin' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true} />}

          {activeTab === 'BDE' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true} />}

          {activeTab === 'Advisor' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}

          {activeTab === 'Admin Office' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}

          {activeTab === 'Principal' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}

          {activeTab === 'Principal LMI' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}
          
          {activeTab === 'Bank Officer' && <Table tableData={EXAMPLE_DATA_3} tableHead={TABLE_HEAD_3} isShowAction={true} />}

          {activeTab === 'Bank Admin' && <Table tableData={EXAMPLE_DATA_3} tableHead={TABLE_HEAD_3} isShowAction={true} />}

          {activeTab === 'Bank Principal' && <Table tableData={EXAMPLE_DATA_3} tableHead={TABLE_HEAD_3} isShowAction={true} />}
        </div>
      </div>
    </div>
  );
}

export default Index;
