function CreateNews() {
    return(
        <div className='p-2 bg-background'>
            <div className='bg-white p-10 rounded '>
                <p className="text-company2 font-bold  mb-5 text-xl">Add News or Article</p>
                <form>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-500">Category</label>
                        <select id="countries" class="bg-gray-50 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Choose a category.</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-500">Title</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write the title of the news."/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-500">Meta Title</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Write the meta title of the news."/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-500">Meta Desc</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write the description of the news."/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-500">Slug</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write the slug of the content's URL."/>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-500">Intro</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Write the intro to attract readers."/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-500">Cover Images</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-500 rounded-lg cursor-pointer p-2.5 mb-5" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                    </div>
                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-500">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-500 mb-5" placeholder="Start writing here"></textarea>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-500">Tags</label>
                        <select id="countries" class="bg-gray-50 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Choose a tag.</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-500">Status</label>
                        <select id="countries" class="bg-gray-50 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Choose a status.</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <div class="bg-gray-500 text-white border-gray-500 font-medium rounded-lg text-sm w-20 h-10 sm:w-auto px-5 py-2.5 text-center mr-5">
                            <button type="submit" > Save as Draft</button>
                        </div>
                        <button type="submit" class="text-white bg-company2 font-medium rounded-lg text-sm w-20 h-10 sm:w-auto px-5 py-2.5 text-center">Submit</button>

                    </div>
                </form>

                
            
            </div>
        </div>
    )
}

export default CreateNews;




      
//         <div >
//           <Tabs titleList={USER_TABS_HEADER} onSelected={setActiveTabs} activeTab={activeTab}/>

//           {activeTab === 'Customer' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true} />}

//           {activeTab === 'Author' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true}/>}

//           {activeTab === 'Super Admin' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true} />}

//           {activeTab === 'BDE' && <Table tableData={EXAMPLE_DATA} tableHead={TABLE_HEAD} isShowAction={true} />}

//           {activeTab === 'Advisor' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}

//           {activeTab === 'Admin Office' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}

//           {activeTab === 'Principal' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}

//           {activeTab === 'Principal LMI' && <Table tableData={EXAMPLE_DATA_2} tableHead={TABLE_HEAD_2} isShowAction={true} />}
          
//           {activeTab === 'Bank Officer' && <Table tableData={EXAMPLE_DATA_3} tableHead={TABLE_HEAD_3} isShowAction={true} />}

//           {activeTab === 'Bank Admin' && <Table tableData={EXAMPLE_DATA_3} tableHead={TABLE_HEAD_3} isShowAction={true} />}

//           {activeTab === 'Bank Principal' && <Table tableData={EXAMPLE_DATA_3} tableHead={TABLE_HEAD_3} isShowAction={true} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Index;
