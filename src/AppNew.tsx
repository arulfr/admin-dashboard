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
            <div className="flex-1 p-4 overflow-auto">
                <div className="px-2 mb-4">
                    <h2 className="text-gray-500 font-bold text-2xl">Dashboard Pegawai</h2>
                </div>
                {/* Area Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
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
                {/* Area Table */}
                <div className="mt-6 bg-white rounded-md border-b border-slate-300 shadow overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-300 text-slate-700">
                                <tr>
                                    <th className="p-4">Nama Pegawai</th>
                                    <th className="p-4">Jenis Dokumen</th>
                                    <th className="p-4">Tanggal Dokumen</th>
                                    <th className="p-4">Status Dokumen</th>
                                    <th className="p-4">Opsi</th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white rounded-full font-bold mr-2">
                                        A
                                    </div>
                                    Amrullah
                                </td>
                                <td className="p-4">Ijazah S1</td>
                                <td className="p-4">10/11/2024</td>
                                <td className="p-4">
                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-sm font-semibold rounded-full">
                                        Menunggu Verifikasi
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-300">Submit</button>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white rounded-full font-bold mr-2">
                                        A
                                    </div>
                                    Aghna
                                </td>
                                <td className="p-4">Ijazah S1</td>
                                <td className="p-4">10/11/2024</td>
                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 text-sm font-semibold rounded-full">
                                        Diterima
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-300">Submit</button>
                                </td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white rounded-full font-bold mr-2">
                                        J
                                    </div>
                                    Jonas
                                </td>
                                <td className="p-4">Ijazah S1</td>
                                <td className="p-4">10/11/2024</td>
                                <td className="p-4">
                                    <span className="bg-red-100 text-red-700 px-2 py-1 text-sm font-semibold rounded-full">
                                        Rejected
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-300">Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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