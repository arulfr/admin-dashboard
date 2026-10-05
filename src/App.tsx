
import {HomeIcon,UserIcon,DocumentIcon, CogIcon, BellIcon} from '@heroicons/react/24/solid';

function App() {

  return (
    <>
      <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
          <aside className="w-64 bg-gray-700 text-white flex flex-col">
              <div className="p-4 text-xl font-bold border-b border-slate-700">
                HR Connect
              </div>
              {/* Side menu */}
              <nav className="flex-1 p-4 ">
                  <p className="text-slate-400 mb-1">Menu akan ada di sini</p>
                  <ul>
                    <li className="py-4 px-2 rounded-2xl border-slate-300 hover:text-white hover:bg-blue-500">
                      <a href="#" className="flex items-center">
                        <HomeIcon className="h-5 w-5" />
                        <span className="ml-1">Dashboard</span>
                      </a>
                      </li>
                    <li className="py-4 px-2 rounded-2xl border-slate-300 hover:text-white hover:bg-blue-500">
                      <a href="#" className="flex items-center">
                        <UserIcon className="h-5 w-5" />
                        <span className="ml-1">Data Pegawai</span>
                      </a>
                    </li>
                    <li className="py-4 px-2 rounded-2xl border-slate-300 hover:text-white hover:bg-blue-500">
                      <a href="#" className="flex items-center">
                        <DocumentIcon className="h-5 w-5" />
                        <span className="ml-1">Verifikasi Dokumen</span>
                      </a>
                    </li>
                    <li className="py-4 px-2 rounded-2xl border-slate-300 hover:text-white hover:bg-blue-500">
                      <a href="#" className="flex items-center">
                        <CogIcon className="h-5 w-5" />
                        <span className="ml-1">Pengaturan</span>
                      </a>
                    </li>
                  </ul>
              </nav>
              <div className="p-4 border-t border-slate-700">
                <p className="text-slate-400">Profile User</p>
              </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col h-screen overflow-hidden">
              {/* Header atas */}
              <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 justify-between">
                <div className="flex items-center">
                  <input type="text" placeholder="cari" className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 " />
                </div>
                {/* bagian kanan */}
                <div className="flex items-center space-x-6">
                  <button className="text-slate-400 hover:text-blue-500 transition-colors">
                    <BellIcon className="h-5 w-5" />
                  </button>
                  {/* Info Profil */}
                  <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <span className="font-medium text-slate-700 hidden md:block">
                      Admin HR
                    </span>
                  </div>

                </div>
                {/* ------------------------- */}
              </header>
              {/* PAGE CONTENT */}
            {/* flex-1 mengisi sisa tinggi, overflow-auto agar area ini saja yang bisa di-scroll */}
            <main className="flex-1 overflow-auto p-6">
            
              <h1 className="text-2xl font-bold mb-6">Manajemen Data Pegawai</h1>
              {/* Area grid untuk Kartu */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* --------- Kartu 1 ------------- */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                  <h3 className="text-slate-500 text-sm font-medium">
                    Total Pegawai
                  </h3>
                  <p className="text-3xl font-bold text-slate-800 mt-2">156</p>
                  <p className="text-emerald-500 text-sm mt-2 font-medium">+12 Bulan Ini</p>
                </div>
                {/* --------- Kartu 2 ------------- */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                  <h3 className="text-slate-500 text-sm font-medium">
                    Cuti Menunggu
                  </h3>
                  <p className="text-3xl font-bold text-slate-800 mt-2">8</p>
                  <p className="text-orange-400 text-sm mt-2 font-medium">Perlu disetujui</p>
                </div>
                {/* --------- Kartu 3 ------------- */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
                  <h3 className="text-slate-500 text-sm font-medium">
                    Pegawai Baru
                  </h3>
                  <p className="text-3xl font-bold text-slate-800 mt-2">24</p>
                  <p className="text-blue-500 text-sm mt-2 font-medium">Tahun Ini</p>
                </div>
              </div>
            </main>
          </div>
      </div>
    </>
  )
}

export default App
