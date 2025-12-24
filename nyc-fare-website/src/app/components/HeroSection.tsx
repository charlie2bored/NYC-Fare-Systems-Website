export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-black px-6 py-12">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal leading-tight tracking-wide">
            NYC&apos;s $3.77B Question
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Should New York City&apos;s subway keep its flat $2.90 fare, or modernize to distance-based pricing like Tokyo, London, and Seoul?
          </p>

          <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Explore the Findings →
          </button>
        </div>

        {/* Fare Comparison */}
        <div className="space-y-12 pt-8">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
              Why does a 2-mile subway ride cost the same as a 20-mile one?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              New York City&apos;s flat $2.90 fare is an outdated relic. Every major global city has moved to distance-based pricing—except us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-10 rounded-xl">
              <h3 className="text-xl font-semibold mb-8 text-gray-800">Current NYC Flat Fare</h3>
              <div className="text-5xl font-bold text-black mb-6">$2.90</div>
              <p className="text-gray-600 mb-6 text-lg">Same price for any distance</p>
              <div className="space-y-3 text-base">
                <div>Times Square → Union Square (0.9 miles) <span className="font-semibold">$2.90</span></div>
                <div>Penn Station → Brooklyn Bridge (4 miles) <span className="font-semibold">$2.90</span></div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-xl">
              <h3 className="text-xl font-semibold mb-8 text-gray-800">Proposed Distance-Based</h3>
              <div className="text-5xl font-bold text-black mb-6">$2.00 + $0.15/km</div>
              <p className="text-gray-600 mb-6 text-lg">Fair pricing by distance</p>
              <div className="space-y-3 text-base">
                <div>Times Square → Union Square (0.9 miles) <span className="font-semibold">$2.38</span></div>
                <div>Penn Station → Brooklyn Bridge (4 miles) <span className="font-semibold">$3.00</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-black mb-3">$3.8B</div>
              <div className="text-gray-600 text-lg">Annual MTA Revenue</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-black mb-3">6.4km</div>
              <div className="text-gray-600 text-lg">Average Trip Distance</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-black mb-3">32%</div>
              <div className="text-gray-600 text-lg">Riders Would Save</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
