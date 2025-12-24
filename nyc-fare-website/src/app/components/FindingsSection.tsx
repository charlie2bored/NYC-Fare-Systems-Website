export default function FindingsSection() {
  return (
    <section id="findings" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-normal tracking-wide">
            The Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We analyzed 1,000,000+ origin-destination trips using MTA data to understand the impact of different fare systems.
          </p>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-sm space-y-12">
          <h3 className="text-2xl font-semibold text-gray-800">Fare System Comparison</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-200 p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Current Flat Fare</h4>
              <div className="text-4xl font-bold text-black mb-4">$2.90</div>
              <p className="text-gray-600 text-base leading-relaxed">
                Same price for all trips, regardless of distance. The status quo that NYC has used for decades.
              </p>
            </div>

            <div className="border-2 border-gray-400 bg-gray-50 p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Distance-Based Medium</h4>
              <div className="text-4xl font-bold text-black mb-4">$2.00 + $0.15/km</div>
              <p className="text-gray-700 text-base leading-relaxed">
                Balanced distance-based fare that generates additional MTA revenue while improving equity. 32% of riders save money.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Tokyo-Style Distance</h4>
              <div className="text-4xl font-bold text-black mb-4">$1.20 max</div>
              <p className="text-gray-600 text-base leading-relaxed">
                Japan&apos;s IC card system with distance-based pricing. Much cheaper than NYC for equivalent trips.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-xl">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">London Zone System</h4>
              <div className="text-4xl font-bold text-black mb-4">$3.40-8.99</div>
              <p className="text-gray-600 text-base leading-relaxed">
                Oyster card zones with peak/off-peak pricing. Complex but fair distance-based system.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-xl">
            <h4 className="text-xl font-semibold mb-8 text-gray-800">Winners & Losers</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-black">32% of trips</div>
                <p className="text-gray-700 text-base leading-relaxed">would cost less under distance-based pricing (average savings: $0.44).</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-black">58% of trips</div>
                <p className="text-gray-700 text-base leading-relaxed">would cost more (average increase: $0.72).</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-black">10% of trips</div>
                <p className="text-gray-700 text-base leading-relaxed">would pay about the same (±$0.10).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-8 text-gray-800">Equity Considerations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-black">Short trips (&lt;2km): Save $0.42 on average</h4>
              <p className="text-gray-600 text-base leading-relaxed">Inner-city commuters and students benefit most from distance-based pricing.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-black">Long trips (&gt;3km): Pay $0.75 more on average</h4>
              <p className="text-gray-600 text-base leading-relaxed">Outer borough residents face higher costs due to longer commutes to Manhattan job centers.</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Questions About Our Findings?
          </button>
          <p className="text-gray-600 text-base">
            Ask About the Data → 💡 Expert Available: Data analyst ready to discuss methodology, statistical validation, and policy implications
          </p>
        </div>
      </div>
    </section>
  );
}
