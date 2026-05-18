export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] px-8 py-20">npm run dev
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-[#D4A017] font-semibold">
          Members Dashboard
        </p>

        <h1 className="mt-4 text-6xl font-black text-[#123C73]">
          Welcome to EYM!
        </h1>

        <p className="mt-6 text-xl text-gray-700">
          Your formation journey continues here.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#123C73]">
              Formation Progress
            </h2>

            <p className="mt-4 text-gray-600">
              Track completed modules and formation milestones.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#123C73]">
              Upcoming Events
            </h2>

            <p className="mt-4 text-gray-600">
              Register for camps, webinars, and national activities.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#123C73]">
              Prayer Intentions
            </h2>

            <p className="mt-4 text-gray-600">
              Pray with the Church and the Holy Father’s intentions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}