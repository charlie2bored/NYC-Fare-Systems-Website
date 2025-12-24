export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal tracking-wide">
            The Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A distance-based fare system ($2.00 + $0.15/km) with equity protections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Fair Pricing</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Users pay proportional to the service consumed. Short trips get relief, long trips contribute fairly.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Distance-Based Medium</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Balanced rate ($0.15/km) generates additional MTA revenue ($95.5M annually) while improving fare equity.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Technology Ready</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              OMNY contactless system supports distance calculation. No new infrastructure needed.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-xl">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Equity Protected</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Outer borough discounts, caps on maximum fares, and maintained senior/disabled benefits.
          </p>
        </div>

        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Ready to Modernize NYC Transit?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This analysis shows that distance-based fares are not just fairer—they&apos;re feasible, generate additional revenue, and align NYC with global best practices.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200">
              Academic Research
            </button>
            <button className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200">
              View Source Code
            </button>
            <button className="bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors duration-200">
              Contact Researcher
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Academic Research & Methodology</h3>
          <p className="text-gray-600 mb-6">
            For researchers and policymakers: comprehensive analysis with full statistical methodology, data sources, and modeling assumptions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📄</div>
              <h4 className="font-semibold mb-2">Full Methodology Report</h4>
              <p className="text-sm text-gray-600 mb-3">Detailed statistical analysis, data processing pipeline, and validation methods used in this study.</p>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                Download PDF (2.4MB)
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">Raw Data & Code</h4>
              <p className="text-sm text-gray-600 mb-3">Complete dataset, Python analysis scripts, and interactive notebooks for replication.</p>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                View on GitHub
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold mb-2">Economic Impact Analysis</h4>
              <p className="text-sm text-gray-600 mb-3">Ridership elasticity models, revenue projections, and equity impact assessments.</p>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                Download PDF (1.8MB)
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-10 rounded-xl">
          <h4 className="font-semibold mb-6 text-gray-800 text-lg">How to Cite This Work</h4>
          <code className="bg-gray-100 p-6 rounded text-base block font-mono leading-relaxed">
            @misc&#123;nyc_fare_analysis_2024,<br />
            &nbsp;&nbsp;title=&#123;Distance-Based Fare Systems for NYC Subway: Revenue and Equity Analysis&#125;,<br />
            &nbsp;&nbsp;author=&#123;NYC Fare Systems Analysis Team&#125;,<br />
            &nbsp;&nbsp;year=&#123;2024&#125;,<br />
            &nbsp;&nbsp;url=&#123;https://github.com/charlie2bored/NYC-Fare-Systems&#125;<br />
            &#125;
          </code>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl text-center">
          <div className="space-y-6">
            <div className="bg-white p-12 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Academic Research & Methodology</h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                For researchers and policymakers: comprehensive analysis with full statistical methodology, data sources, and modeling assumptions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">📄</div>
                  <h4 className="font-semibold mb-3 text-gray-800">Full Methodology Report</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Detailed statistical analysis, data processing pipeline, and validation methods used in this study.</p>
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    Download PDF (2.4MB)
                  </button>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="font-semibold mb-3 text-gray-800">Raw Data & Code</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Complete dataset, Python analysis scripts, and interactive notebooks for replication.</p>
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    View on GitHub
                  </button>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <div className="text-4xl mb-4 text-gray-800">📈</div>
                  <h4 className="font-semibold mb-3 text-gray-800">Economic Impact Analysis</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Ridership elasticity models, revenue projections, and equity impact assessments.</p>
                  <button className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    Download PDF (1.8MB)
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-base mb-4">
                Analysis based on 1M+ MTA trips • Data publicly available • Revenue calculations independently verifiable
              </p>
              <p className="text-gray-500 text-sm">
                ©{new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
