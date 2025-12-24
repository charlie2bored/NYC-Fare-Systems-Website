export default function ObjectiveSection() {
  return (
    <section id="objective" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
            How did we analyze 1 million subway trips?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We used publicly available MTA data to model distance-based fares across New York City&apos;s entire subway network.
          </p>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 text-sm font-medium hover:bg-gray-300 transition-colors duration-200">
            Show Technical Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-sm">
            <div className="text-5xl font-bold text-black mb-6">1</div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Data Source</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Publicly available subway trip data from the MTA OD (Origin-Destination) matrices from MTA&apos;s General Transit Feed Specification (GTFS) with ridership patterns from automatic fare collection systems
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <div className="text-5xl font-bold text-black mb-6">2</div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Distance Calculation</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              GPS coordinates between subway stations Haversine distance formula applied to station coordinates: d = 2r * arcsin(sqrt(sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlon/2)))
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-sm">
            <div className="text-5xl font-bold text-black mb-6">3</div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Revenue Modeling</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Multiplied trip distances by proposed fare rates Applied Monte Carlo simulation with 95% confidence intervals, controlling for seasonal variation and ridership elasticity (price sensitivity coefficient: -0.3)
            </p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-8 text-gray-800">Full Methodology Details +</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-gray-800">Data Processing Pipeline</h4>
              <ul className="text-gray-600 space-y-3 text-base">
                <li>• Station coordinate geocoding using Google Maps API</li>
                <li>• Route optimization to find shortest paths between stations</li>
                <li>• Ridership weighting based on peak/off-peak patterns</li>
                <li>• Economic modeling with cross-elasticity adjustments</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-gray-800">Statistical Validation</h4>
              <ul className="text-gray-600 space-y-3 text-base">
                <li>• Bootstrap resampling for confidence intervals</li>
                <li>• Sensitivity analysis across fare rate parameters</li>
                <li>• Comparison with existing distance-based systems</li>
                <li>• Equity impact assessment by income quartile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
