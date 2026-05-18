import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
 

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#123C73] via-[#1E4D8C] to-[#123C73]" />

        <div className="relative px-8 py-28 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-sm text-blue-100 mb-5">
              Eucharistic Youth Movement Philippines
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              Young apostles.
              <br />
              In love with Jesus.
              <br />
              Transforming the world.
            </h2>

            <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Journeying through God’s Word, the Eucharist, and Mission —
              forming young people to live like Jesus and serve the Church and
              the world.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <button className="px-8 py-4 rounded-2xl bg-[#D4A017] text-white font-bold text-lg shadow-xl hover:scale-105 transition">
                Join EYM
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/40 backdrop-blur bg-white/10 text-white font-bold text-lg hover:bg-white hover:text-[#123C73] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              📖
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#123C73]">
              Formation
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Access formation modules, reflections, leadership resources,
              prayer guides, and spiritual growth materials.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl">
              🗓️
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#123C73]">
              Events & Activities
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Join camps, recollections, webinars, Eucharistic celebrations,
              and national gatherings across the Philippines.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-3xl">
              🙏
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#123C73]">
              Prayer & Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Pray with the Church through the Holy Father’s Monthly Intentions
              and participate in mission and outreach opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* HOLY FATHER SECTION */}
      <section className="px-8 pb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase text-sm tracking-[0.3em] text-[#D4A017] font-semibold">
                Pray with the Church
              </p>

              <h2 className="mt-4 text-5xl font-black text-[#123C73] leading-tight">
                Monthly Intention
                <br />
                of the Holy Father
              </h2>

              <div className="mt-6 inline-flex px-4 py-2 rounded-full bg-blue-100 text-[#123C73] font-bold">
                MAY 2027
              </div>

              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                “That there be job opportunities for everyone. Let us pray that
                technological development might open dignified work
                opportunities, and that intergenerational collaboration might
                bring a future in which every person can put their talents at
                the service of the common good.”
              </p>

              <p className="mt-5 font-bold text-[#123C73]">
                — Pope Leo XIV
              </p>

              <button className="mt-8 px-7 py-4 rounded-2xl bg-[#123C73] text-white font-bold shadow-lg hover:scale-105 transition">
                Pray This Intention
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-[2rem] p-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-6 shadow">
                  <div className="text-4xl">🕊️</div>

                  <h3 className="mt-4 font-bold text-[#123C73] text-lg">
                    Intention
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Pray with the Pope’s monthly prayer intention.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow">
                  <div className="text-4xl">🙏</div>

                  <h3 className="mt-4 font-bold text-[#123C73] text-lg">
                    Prayer
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Unite hearts through prayer and discernment.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow">
                  <div className="text-4xl">📖</div>

                  <h3 className="mt-4 font-bold text-[#123C73] text-lg">
                    Reflection
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Reflect on the call of the Gospel in daily life.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow">
                  <div className="text-4xl">❤️</div>

                  <h3 className="mt-4 font-bold text-[#123C73] text-lg">
                    Action
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Live concretely the mission entrusted by Christ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}