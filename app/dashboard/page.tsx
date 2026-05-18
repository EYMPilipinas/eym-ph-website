import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  HandHelping,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] flex">

      {/* SIDEBAR */}
      <div className="w-[260px] bg-white shadow-xl p-6 hidden lg:flex flex-col">

        <div>
          <h1 className="text-3xl font-black text-[#123C73]">
            EYM
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Member Portal
          </p>
        </div>

        <div className="mt-12 space-y-3">

          <button className="w-full flex items-center gap-4 bg-[#123C73] text-white px-4 py-4 rounded-2xl font-semibold shadow-lg">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-4 hover:bg-gray-100 px-4 py-4 rounded-2xl font-semibold text-gray-700 transition-all duration-300">
            <BookOpen className="w-5 h-5" />
            Formation
          </button>

          <button className="w-full flex items-center gap-4 hover:bg-gray-100 px-4 py-4 rounded-2xl font-semibold text-gray-700 transition-all duration-300">
            <CalendarDays className="w-5 h-5" />
            Events
          </button>

          <button className="w-full flex items-center gap-4 hover:bg-gray-100 px-4 py-4 rounded-2xl font-semibold text-gray-700 transition-all duration-300">
            <HandHelping className="w-5 h-5" />
            Prayer
          </button>

          <button className="w-full flex items-center gap-4 hover:bg-gray-100 px-4 py-4 rounded-2xl font-semibold text-gray-700 transition-all duration-300">
            <Users className="w-5 h-5" />
            Community
          </button>

          <button className="w-full flex items-center gap-4 hover:bg-gray-100 px-4 py-4 rounded-2xl font-semibold text-gray-700 transition-all duration-300">
            <Settings className="w-5 h-5" />
            Settings
          </button>

        </div>

        <div className="mt-auto">
          <button className="w-full flex items-center gap-4 text-red-500 hover:bg-red-50 px-4 py-4 rounded-2xl font-semibold transition-all duration-300">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-sm text-[#D4A017] font-semibold">
            Members Dashboard
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-[#123C73] leading-tight">
            Welcome back, JC 👋
          </h1>

          <p className="mt-6 text-xl text-gray-700 max-w-2xl leading-relaxed">
            Continue your Eucharistic journey through prayer, formation,
            mission, and community life today.
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#D4A017] font-semibold">
            Thursday • Formation Season
          </p>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">
                Modules Completed
              </p>

              <h3 className="mt-2 text-4xl font-black text-[#123C73]">
                12
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">
                Upcoming Events
              </p>

              <h3 className="mt-2 text-4xl font-black text-[#D4A017]">
                5
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">
                Prayer Streak
              </p>

              <h3 className="mt-2 text-4xl font-black text-[#123C73]">
                21
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">
                Community Rank
              </p>

              <h3 className="mt-2 text-4xl font-black text-[#D4A017]">
                #8
              </h3>
            </div>

          </div>

          {/* CARDS */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* PROFILE CARD */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

              <div className="flex flex-col items-center text-center">

                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#123C73] to-[#1E4D8C] flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  JC
                </div>

                <h2 className="mt-6 text-3xl font-black text-[#123C73]">
                  JC Corpus
                </h2>

                <p className="mt-2 text-gray-500">
                  National President
                </p>

                <div className="mt-8 w-full space-y-4">

                  <div className="bg-[#F5F7FB] rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Diocese
                    </p>

                    <h3 className="mt-1 font-bold text-[#123C73]">
                      Diocese of Parañaque
                    </h3>
                  </div>

                  <div className="bg-[#F5F7FB] rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Formation Level
                    </p>

                    <h3 className="mt-1 font-bold text-[#123C73]">
                      National Leadership
                    </h3>
                  </div>

                  <div className="bg-[#F5F7FB] rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Member Since
                    </p>

                    <h3 className="mt-1 font-bold text-[#123C73]">
                      2011
                    </h3>
                  </div>

                </div>

              </div>

            </div>

            {/* FORMATION CARD */}
            <div className="bg-white rounded-[2rem] p-7 flex flex-col justify-between shadow-lg min-h-[180px] cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-[#123C73]" />
              </div>

              <div>
                <h2 className="mt-6 text-3xl font-bold text-[#123C73]">
                  Formation Progress
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  Track completed modules and formation milestones.
                </p>
              </div>

              <button className="mt-8 w-[170px] px-5 py-3 rounded-xl bg-[#123C73] text-white font-bold hover:scale-105 transition-all duration-300 cursor-pointer">
                View Progress
              </button>

            </div>

            {/* EVENTS CARD */}
            <div className="bg-white rounded-[2rem] p-7 flex flex-col justify-between shadow-lg min-h-[180px] cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-100 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <CalendarDays className="w-8 h-8 text-[#D4A017]" />
              </div>

              <div>
                <h2 className="mt-6 text-3xl font-bold text-[#123C73]">
                  Upcoming Events
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  Register for camps, webinars, and national activities.
                </p>
              </div>

              <button className="mt-8 w-[170px] px-5 py-3 rounded-xl bg-[#D4A017] text-white font-bold hover:scale-105 transition-all duration-300 cursor-pointer">
                Explore Events
              </button>

            </div>

            {/* PRAYER CARD */}
            <div className="bg-white rounded-[2rem] p-7 flex flex-col justify-between shadow-lg min-h-[180px] cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-100 transition-all duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                <HandHelping className="w-8 h-8 text-green-700" />
              </div>

              <div>
                <h2 className="mt-6 text-3xl font-bold text-[#123C73]">
                  Prayer Intentions
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                  Pray with the Church and the Holy Father’s intentions.
                </p>
              </div>

              <button className="mt-8 w-[170px] px-5 py-3 rounded-xl bg-[#123C73] text-white font-bold hover:scale-105 transition-all duration-300 cursor-pointer">
                Pray Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}