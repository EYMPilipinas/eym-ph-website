export default function FormationPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#123C73] to-[#1E4D8C] text-white px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-blue-200">
            EYM Formation
          </p>

          <h1 className="mt-5 text-6xl font-black leading-tight">
            Growing in Friendship
            <br />
            with Jesus.
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl leading-relaxed">
            Formation modules rooted in God’s Word, the Eucharist,
            discernment, prayer, and mission — following the EYM Way of
            Proceeding.
          </p>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="uppercase text-sm tracking-[0.3em] text-[#D4A017] font-semibold">
                Formation Modules
              </p>

              <h2 className="mt-3 text-5xl font-black text-[#123C73]">
                Learn. Reflect. Live.
              </h2>
            </div>

            <button className="px-6 py-3 rounded-2xl bg-[#123C73] text-white font-semibold shadow">
              Members Login
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MODULE 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-1 transition">
              <div className="h-52 bg-gradient-to-br from-yellow-400 to-yellow-600" />

              <div className="p-8">
                <div className="inline-flex px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                  Beginner
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#123C73]">
                  Identity of an EYM Member
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Discover the roots, spirituality, mission, and identity of
                  the Eucharistic Youth Movement.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    6 Lessons
                  </span>

                  <button className="px-5 py-2 rounded-xl bg-[#123C73] text-white font-semibold">
                    View Module
                  </button>
                </div>
              </div>
            </div>

            {/* MODULE 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-1 transition">
              <div className="h-52 bg-gradient-to-br from-blue-500 to-blue-700" />

              <div className="p-8">
                <div className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  Intermediate
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#123C73]">
                  Eucharistic Spirituality
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Understand the Eucharist as source and summit of Christian
                  life and mission.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    8 Lessons
                  </span>

                  <button className="px-5 py-2 rounded-xl bg-[#123C73] text-white font-semibold">
                    View Module
                  </button>
                </div>
              </div>
            </div>

            {/* MODULE 3 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-1 transition">
              <div className="h-52 bg-gradient-to-br from-red-500 to-red-700" />

              <div className="p-8">
                <div className="inline-flex px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold">
                  Leadership
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#123C73]">
                  Mission & Leadership
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Learn accompaniment, discernment, servant leadership, and
                  mission-centered service.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    10 Lessons
                  </span>

                  <button className="px-5 py-2 rounded-xl bg-[#123C73] text-white font-semibold">
                    View Module
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* NOTICE */}
          <div className="mt-16 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-lg">
            <h3 className="text-3xl font-bold text-[#123C73]">
              Members-Only Formation Intranet
            </h3>

            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Online formation modules following EYM’s Way of Proceeding can
              only be accessed by eligible EYM members. This platform serves
              as initial formation, refresher formation, and a unified
              nationwide reference for all communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-2xl bg-blue-100 text-[#123C73] font-semibold">
                Unlimited Exam Attempts
              </div>

              <div className="px-5 py-3 rounded-2xl bg-yellow-100 text-yellow-700 font-semibold">
                Accessible Anywhere
              </div>

              <div className="px-5 py-3 rounded-2xl bg-red-100 text-red-700 font-semibold">
                Progress Tracking
              </div>

              <div className="px-5 py-3 rounded-2xl bg-green-100 text-green-700 font-semibold">
                Nationwide Formation Standard
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}