export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-[#D4A017] font-semibold">
          About EYM
        </p>

        <h1 className="mt-4 text-6xl font-black text-[#123C73] leading-tight">
          Rooted in Prayer.
          <br />
          Alive in the Eucharist.
          <br />
          Sent on Mission.
        </h1>

        <p className="mt-8 text-xl text-gray-700 leading-relaxed">
          The Eucharistic Youth Movement (EYM) is the youth initiative of the
          Pope’s Worldwide Prayer Network, helping young people develop a
          personal friendship with Jesus through God’s Word, the Eucharist,
          and Mission.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#123C73]">
              Our Vision
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              To see young people across the world living like Jesus —
              rooted in God’s Word, formed by the Eucharist, and committed
              to transforming the world.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#123C73]">
              Our Mission
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              To accompany youth in developing a personal friendship with
              Jesus, forming them in Eucharistic spirituality through
              prayer, discernment, community, and service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}