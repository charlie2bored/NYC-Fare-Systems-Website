export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
            Who wins and who loses in a distance-based system?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our analysis reveals clear winners and losers, with significant savings for most riders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-8 text-gray-800">Revenue Impact by Fare System</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center space-y-3">
                <div className="text-3xl font-bold text-black">Current</div>
                <div className="text-2xl font-bold text-black">$3.8B</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl font-bold text-black">Distance</div>
                <div className="text-2xl font-bold text-black">$3.89B</div>
              </div>
            </div>
            <button className="mt-8 bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
              📊 Download Data
            </button>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-8 text-gray-800">Rider Savings Distribution</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">32% Save Money</span>
                <div className="w-32 bg-gray-200 h-4 rounded-full">
                  <div className="bg-gray-800 h-4 rounded-full" style={{width: '32%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">10% Same Price</span>
                <div className="w-32 bg-gray-200 h-4 rounded-full">
                  <div className="bg-gray-800 h-4 rounded-full" style={{width: '10%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">58% Pay More</span>
                <div className="w-32 bg-gray-200 h-4 rounded-full">
                  <div className="bg-gray-800 h-4 rounded-full" style={{width: '58%'}}></div>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
              📊 Download Data
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-xl">
          <h3 className="text-xl font-semibold mb-10 text-gray-800">How does NYC compare globally?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-6 text-gray-800">London Oyster Card</h4>
              <p className="text-base text-gray-600 mb-6">Zone-based system with peak/off-peak pricing</p>
              <div className="space-y-3 text-base">
                <div>5km trip <span className="font-semibold">$4.50</span></div>
                <div>20km trip <span className="font-semibold">$8.99</span></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-6 text-gray-800">Singapore EZ-Link</h4>
              <p className="text-base text-gray-600 mb-6">Distance-based with distance capping</p>
              <div className="space-y-3 text-base">
                <div>5km trip <span className="font-semibold">$1.20</span></div>
                <div>20km trip <span className="font-semibold">$2.50</span></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-6 text-gray-800">Paris Navigo</h4>
              <p className="text-base text-gray-600 mb-6">Zone-based with unlimited options</p>
              <div className="space-y-3 text-base">
                <div>5km trip <span className="font-semibold">$2.10</span></div>
                <div>20km trip <span className="font-semibold">$2.10</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
