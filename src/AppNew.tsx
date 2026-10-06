import React, { useState } from 'react';
import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import { Cog6ToothIcon, DocumentIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/solid';

const AppNew = () => {
    
    const [isSideBarOpen,setIsSideBarOpen] = useState(true); 

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-900">
        <aside className={`flex flex-col bg-gray-800 text-white transition-all duration-300 overflow-hidden ${isSideBarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'} `}>
            <div className="text-2xl p-4 text-center font-bold border-b border-slate-300">
                HR Connect
            </div>
            <p className="p-4 text-slate-400">Menu</p>
            <ul className="flex-1 p-2">
                <li className="px-3 py-2 mb-4 hover:bg-blue-300 rounded-md cursor-pointer font-medium">
                  <a href="#" className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2" />
                    Dashboard
                  </a>
                </li>
                <li className="px-3 py-2 mb-4 hover:bg-blue-300 rounded-md cursor-pointer font-medium">
                  <a href="#" className="flex items-center">
                    <UserIcon className="h-5 w-5 mr-2" />
                    Data Pegawai
                  </a>
                </li>
                <li className="px-3 py-2 mb-4 hover:bg-blue-300 rounded-md cursor-pointer font-medium">
                  <a href="#" className="flex items-center">
                    <DocumentIcon className="h-5 w-5 mr-2" />
                    Verifikasi Dokumen
                  </a>
                </li>
                <li className="px-3 py-2 mb-4 hover:bg-blue-300 rounded-md cursor-pointer font-medium">
                  <a href="#" className="flex items-center">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Pengaturan
                  </a>
                </li>
            </ul>
            <div className="p-4 border-t border-slate-300">
                <p className="text-slate-400 text-sm">
                    &copy; 2024 HR Connect. All rights reserved.
                </p>
            </div>
        </aside>
        {/* Main content */}
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
            {/* header */}
            <header className="flex h-16 bg-white border-b border-slate-300 justify-between">
                {/* Search */}
                <div className="flex items-center px-4">
                    <button onClick={()=>setIsSideBarOpen(!isSideBarOpen)} className="mr-2 p-3 border border-slate-300 rounded-xl outline-none hover:bg-slate-200">
                        <Bars3Icon id="MenuSlide" className="h-5 w-5"/>
                    </button>
                    <input 
                        type="text"
                        className="px-4 py-2 border border-slate-300 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Cari..."
                    />
                </div>
                {/* bagian kanan */}
                <div className="flex items-center space-x-2 px-4">
                    <div className="flex items-center justify-center bg-blue-500 h-10 w-10 rounded-full font-bold text-xl text-white">
                        A
                    </div>
                    <h3 className="font-semibold">Admin</h3>
                </div>
            </header>
            {/* Content */}
            <div className="flex-1 p-4 mt-4 overflow-auto">
                <div className="grid grid-cols-3 gap-2 mb-2">
                    {/* card 1 */}
                    <div className="flex flex-col p-4 rounded-lg bg-green-500 hover:bg-green-400">
                        <h2 className="text-2xl font-bold text-white">Data Pegawai</h2>
                        <span className="text-white text-xl mt-2 font-bold text-left">35</span>
                        <p className="text-white font-medium mt-1">Total Pegawai</p>
                    </div>
                    {/* card 2 */}
                    <div className="flex flex-col p-4 rounded-lg bg-blue-500 hover:bg-blue-400">
                        <h2 className="text-2xl font-bold text-white">Data Surat Terverifikasi</h2>
                        <span className="text-white text-xl mt-2 font-bold text-left">35</span>
                        <p className="text-white font-medium mt-1">Total Surat Terverifikasi</p>
                    </div>
                    {/* card 3 */}
                    <div className="flex flex-col p-4 rounded-lg bg-yellow-500 hover:bg-yellow-400">
                        <h2 className="text-2xl font-bold text-white">Data Surat Masuk</h2>
                        <span className="text-white text-xl mt-2 font-bold text-left">35</span>
                        <p className="text-white font-medium mt-1">Total Surat Masuk</p>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="p-4 border-t border-slate-300">
                <p className="text-slate-400 text-sm">
                    &copy; 2024 HR Connect. All rights reserved.
                </p>
            </div>
        </main>

    </div>
  )
}

export default AppNew