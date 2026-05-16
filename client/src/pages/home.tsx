import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="border-b-2 border-black sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black" />
            <span className="font-bold tracking-tighter text-xl">NYC DATA</span>
          </div>
          <nav className="hidden md:flex gap-6 font-mono text-sm">
            <a href="#home" className="hover:underline decoration-2 underline-offset-4">HOME</a>
            <a href="#objective" className="hover:underline decoration-2 underline-offset-4">OBJECTIVE</a>
            <a href="#process" className="hover:underline decoration-2 underline-offset-4">PROCESS</a>
            <a href="#findings" className="hover:underline decoration-2 underline-offset-4">FINDINGS</a>
            <a href="#references" className="hover:underline decoration-2 underline-offset-4">REFERENCES</a>
            <a href="#contact" className="hover:underline decoration-2 underline-offset-4">CONTACT</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 space-y-32">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] flex flex-col justify-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block border border-black px-4 py-2 font-mono text-xs mb-8 uppercase tracking-widest text-center">
              Data Analytics Project 2025
            </div>
            <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter mb-8">
              A $913M<br />
              SETBACK
            </h1>
            <p className="text-xl md:text-3xl font-light text-black/80 max-w-3xl leading-tight">
              NYC's flat-fare model is leaving nearly a billion dollars on the table each year. A data-driven case for distance-based pricing, updated with corrected methodology.
            </p>
          </motion.div>
        </section>

        {/* Objective (formerly Abstract) */}
        <section id="objective" className="pt-24 flex flex-col items-center text-center">
          <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">01. The Objective</h2>
          <div className="max-w-4xl">
            <p className="font-medium text-2xl md:text-4xl leading-tight">
              Can the MTA modernize by replacing the current flat-fare model ($2.90) with a distance based model ($2.00 + $0.24/mile) to improve governmental revenue and passenger equity?
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="pt-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">02. The Process</h2>
            <p className="text-gray-600 text-center">
              To follow along, find the data in my Github here: <a href="https://github.com/charlie2bored/NYC-Fare-Systems" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors">github.com/charlie2bored/NYC-Fare-Systems</a>
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-24">
            
            {/* How I Got The Data */}
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight">How I Got The Data</h3>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">01</span>
                    <span><strong>1M_Stop_Pairing.csv:</strong> MTA Public Data Portal</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">02</span>
                    <span><strong>Master_Stations:</strong> MTA GTFS Data</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">03</span>
                    <span><strong>All_Stops:</strong> Processed through GTFS</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">04</span>
                    <span><strong>Fare_Structures:</strong> Research of International Travel Agencies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Explaining Main.py */}
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight">Explaining Main.py</h3>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-6 text-lg">
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">01</span>
                    <div>
                      <strong>Data Loading with Pandas</strong>
                      <p className="text-gray-600 mt-1">Imported all CSV files into DataFrames for efficient manipulation and analysis.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">02</span>
                    <div>
                      <strong>Validated + Cleaned Data</strong>
                      <p className="text-gray-600 mt-1">Removed null values, standardized station naming conventions, and ensured coordinate integrity.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">03</span>
                    <div>
                      <strong>Distance Calculation</strong>
                      <p className="text-gray-600 mt-1">Two methods: Haversine (straight-line) for the original analysis, and a custom subway-network graph (built from MTA station data) for the corrected v2 analysis. Network distance measures the actual route a train would take, not the crow-flies estimate.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">04</span>
                    <div>
                      <strong>Fare Calculation</strong>
                      <p className="text-gray-600 mt-1">Implemented distance-based pricing tiers modeled after international transit systems.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">05</span>
                    <div>
                      <strong>Annual Scaling</strong>
                      <p className="text-gray-600 mt-1">Normalized hourly sample data to annual projections using MTA official ridership totals.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-gray-400 shrink-0">06</span>
                    <div>
                      <strong>Revenue Projection</strong>
                      <p className="text-gray-600 mt-1">Calculated total annual revenue under both flat-fare and distance-based models for comparison.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Important Information */}
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold uppercase tracking-tight">Other Important Information</h3>
              </div>
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-12 mb-12">
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block mb-1">Sample Size</span>
                    <span className="text-2xl font-bold">1 Million</span>
                    <p className="text-gray-600 text-sm mt-1">Origin-Destination Pairings</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block mb-1">Geographic Coverage</span>
                    <span className="text-2xl font-bold">All NYC</span>
                    <p className="text-gray-600 text-sm mt-1">Subway Stations</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block mb-1">Time Period</span>
                    <span className="text-2xl font-bold">2023-2024</span>
                    <p className="text-gray-600 text-sm mt-1">Ridership Data</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block mb-1">Data Quality</span>
                    <span className="text-2xl font-bold">100%</span>
                    <p className="text-gray-600 text-sm mt-1">Rows Passed Validation</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block mb-1">Distance Method</span>
                    <span className="text-2xl font-bold">Network</span>
                    <p className="text-gray-600 text-sm mt-1">Shortest path along real subway tracks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase Timeline */}
            <div className="space-y-16">
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-gray-400 block mb-2">Phase 1</span>
                  <h3 className="text-2xl font-bold">Data Acquisition & Discovery</h3>
                </div>
                <div className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>Sourced the 1M_Stop_Pairings dataset containing origin-destination coordinates and hourly ridership.</p>
                  <p>Integrated Master_Stations metadata to link station IDs with names and boroughs.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-gray-400 block mb-2">Phase 2</span>
                  <h3 className="text-2xl font-bold">Initial Modeling & The "Inflation" Challenge</h3>
                </div>
                <div className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>Built the first distance-based fare model using the Haversine formula.</p>
                  <p><strong className="text-black">The Problem:</strong> Initial annualization (24 * 365) resulted in a $54 billion revenue estimate, identifying that hourly ridership is not uniform across a 24-hour cycle.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-gray-400 block mb-2">Phase 3</span>
                  <h3 className="text-2xl font-bold">Mathematical Normalization (The Fix)</h3>
                </div>
                <div className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>Obtained official 2024 MTA Annual Totals (1,194,866,357 riders) to serve as a "Source of Truth."</p>
                  <p>Calculated a specific Scaling Factor (557.33x) to normalize hourly samples into realistic annual figures.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-gray-400 block mb-2">Phase 4</span>
                  <h3 className="text-2xl font-bold">Comparative Benchmarking</h3>
                </div>
                <div className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>Applied a flat $2.90 fare to the normalized dataset to create a baseline.</p>
                  <p><strong className="text-black">Verification:</strong> The model yielded $3.46 Billion, successfully matching the MTA's actual reported annual farebox revenue, confirming the model's accuracy.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-gray-400 block mb-2">Phase 5</span>
                  <h3 className="text-2xl font-bold">Equity & Impact Analysis</h3>
                </div>
                <div className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>Performed borough-level grouping to determine that 29% of riders pay less under the new model.</p>
                  <p>Identified the top-performing routes (e.g., Penn Station to 5th/53rd) where high volume generates the most significant revenue.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-gray-400 block mb-2">Phase 6</span>
                  <h3 className="text-2xl font-bold">Methodology Upgrade: Network-Distance Modeling</h3>
                </div>
                <div className="md:col-span-8 text-lg text-gray-600 leading-relaxed space-y-4">
                  <p><strong className="text-black">The Issue:</strong> Haversine distance measures point-to-point as the crow flies. Real subway routes follow tracks, which are often substantially longer. A Flushing → Forest Hills trip is 2.0 miles in a straight line but 5.9 miles by the actual subway, because there's no direct line, so riders must detour through Manhattan.</p>
                  <p><strong className="text-black">The Fix:</strong> Built a graph of the entire NYC subway from Master_Stations.csv. Every station is a node, every adjacent same-line pair an edge, every shared station complex a transfer. Auto-detected 10 line-merger junctions (Pelham ↔ Lexington at 149 St, Nostrand ↔ Eastern Pkwy at Franklin Av, etc.) that the raw data doesn't mark. Result: a 461-station connected network with Staten Island and Rockaway correctly isolated.</p>
                  <p>Re-ran the full 1M-trip analysis against the corrected graph using shortest-path distance.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Findings */}
        <section id="findings" className="pt-24">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">03. Key Findings</h2>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Side-by-side: Original vs Corrected */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Original Analysis */}
              <div className="border-2 border-gray-300 p-8 md:p-10 space-y-6">
                <div>
                  <span className="font-mono text-xs text-gray-500 uppercase block tracking-widest mb-2">Original Analysis</span>
                  <h3 className="text-2xl font-bold tracking-tight">Haversine distance</h3>
                </div>
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block">Current Revenue</span>
                    <span className="text-3xl md:text-4xl font-bold tracking-tighter">$3.47B</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block">Proposed Revenue</span>
                    <span className="text-3xl md:text-4xl font-bold tracking-tighter">$3.74B</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-500 uppercase block">Revenue Surplus</span>
                    <span className="text-3xl md:text-4xl font-bold tracking-tighter">+$277M <span className="text-xl text-gray-500 font-normal">(+8.0%)</span></span>
                  </div>
                  <div className="pt-2">
                    <span className="text-lg"><strong>29%</strong> of riders pay less</span>
                  </div>
                </div>
              </div>

              {/* Corrected Analysis */}
              <div className="bg-black text-white p-8 md:p-10 space-y-6">
                <div>
                  <span className="font-mono text-xs text-gray-400 uppercase block tracking-widest mb-2">Corrected Analysis</span>
                  <h3 className="text-2xl font-bold tracking-tight">Network distance</h3>
                </div>
                <div className="space-y-4 pt-4 border-t border-gray-700">
                  <div>
                    <span className="font-mono text-xs text-gray-400 uppercase block">Current Revenue</span>
                    <span className="text-3xl md:text-4xl font-bold tracking-tighter">$3.47B</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-400 uppercase block">Proposed Revenue</span>
                    <span className="text-3xl md:text-4xl font-bold tracking-tighter">$4.38B</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-400 uppercase block">Revenue Surplus</span>
                    <span className="text-3xl md:text-4xl font-bold tracking-tighter">+$913M <span className="text-xl text-gray-400 font-normal">(+26.4%)</span></span>
                  </div>
                  <div className="pt-2">
                    <span className="text-lg"><strong>14.8%</strong> of riders pay less</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why the gap */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                <strong className="text-black">Why the gap?</strong> Haversine systematically under-estimates how far riders actually travel on the subway, so it under-prices long trips. Using the true subway-network distance reveals the original analysis was conservative by a factor of ~3.
              </p>
              <p className="text-lg text-gray-500">
                Breakeven point (where distance pricing equals the flat fare) remains <strong className="text-black">3.75 miles</strong>. That's set by the price formula, not the distance method.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="pt-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">04. Conclusion</h2>
            <div className="space-y-8 text-left">
              <p className="text-2xl md:text-3xl font-medium leading-tight">
                Two findings stand out. First, distance-based pricing could raise farebox revenue by <strong>$913 million annually</strong>, nearly triple what the initial straight-line analysis suggested. Second, fewer riders benefit directly than first reported: <strong>14.8% pay less</strong>, not 29%, because actual subway trips are longer than they appear on a map.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
                But the equity story doesn't end at the turnstile. An extra $913 million a year is real money the MTA could route back to riders in other ways: cheaper monthly passes, expanded reduced-fare eligibility, deeper student and senior discounts, or holding the next scheduled fare hike. A surplus this size opens up affordability levers that a revenue-neutral fare change can't touch.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
                The most direct application: Mayor Mamdani's proposal to make city buses fare-free. Cost estimates vary from roughly $700 million (the administration's number) to $1 billion (the MTA's, which factors in higher ridership once the fare disappears). Either way, a $913 million surplus from subway distance pricing lands in the same order of magnitude as what fare-free buses would cost. The two policies, often discussed separately, fit together as a single package: long-distance subway riders pay proportionally, and bus riders, who skew lower-income on average, ride free.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
                The next phase of this work overlays neighborhood income data to identify which kinds of trips are most likely to cost more, and whether the burden falls disproportionately on low-income outer-borough commuters. That analysis will determine how much of the surplus needs to be spent offsetting the people who'd otherwise lose out.
              </p>
            </div>
          </div>
        </section>

        {/* References / Sources */}
        <section id="references" className="pt-24">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4">05. References</h2>
              <p className="text-gray-600 text-center max-w-2xl">
                Every number on this page is traceable. Data sources, methodology, and external claims are listed below.
              </p>
            </div>

            <div className="space-y-12">
              {/* Code & Data */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Code & Methodology</h3>
                  <p className="text-gray-500 text-sm mt-2">Everything is open-source and reproducible.</p>
                </div>
                <div className="md:col-span-8 space-y-3 text-base">
                  <div>
                    <a href="https://github.com/charlie2bored/NYC-Fare-Systems" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">NYC-Fare-Systems repository</a>
                    <p className="text-gray-600 text-sm mt-1">Full analysis pipeline (Python). Includes the network-distance graph builder, fare model, sensitivity analysis, and 19 automated tests.</p>
                  </div>
                  <div>
                    <a href="https://github.com/charlie2bored/NYC-Fare-Systems/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">Methodology README</a>
                    <p className="text-gray-600 text-sm mt-1">Step-by-step description of how the network graph is built, how distance is computed, and how revenue is annualized.</p>
                  </div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Data Sources</h3>
                  <p className="text-gray-500 text-sm mt-2">All datasets are publicly available from the MTA.</p>
                </div>
                <div className="md:col-span-8 space-y-3 text-base">
                  <div>
                    <a href="https://data.ny.gov/Transportation/MTA-Subway-Origin-Destination-Ridership-Estimate-2/jsu2-fbtj" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">MTA Subway Origin-Destination Ridership Estimate</a>
                    <p className="text-gray-600 text-sm mt-1">NY Open Data. Source of the 1M origin-destination trip sample (<code className="font-mono text-xs bg-gray-100 px-1">1M_Stop_Pairings.csv</code>).</p>
                  </div>
                  <div>
                    <a href="https://new.mta.info/developers" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">MTA Developer Resources (GTFS)</a>
                    <p className="text-gray-600 text-sm mt-1">Station coordinates, line assignments, and complex (transfer) IDs powering <code className="font-mono text-xs bg-gray-100 px-1">Master_Stations.csv</code>.</p>
                  </div>
                  <div>
                    <a href="https://new.mta.info/agency/new-york-city-transit/subway-bus-ridership-2024" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">MTA 2024 Annual Subway Ridership: 1,194,866,357</a>
                    <p className="text-gray-600 text-sm mt-1">Official annual total used to scale the sample to a yearly revenue figure.</p>
                  </div>
                </div>
              </div>

              {/* Financial Figures */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Financial Figures</h3>
                  <p className="text-gray-500 text-sm mt-2">Where the comparison numbers in the Conclusion come from.</p>
                </div>
                <div className="md:col-span-8 space-y-3 text-base">
                  <div>
                    <a href="https://www.mta.info/document/174041" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">MTA Finance Committee Financial Performance Report (May 2025)</a>
                    <p className="text-gray-600 text-sm mt-1">NYC Transit bus farebox revenue: $614.8M (2024 actual), $687.6M (2025 projected). Basis for the "$600 to $750M" range cited.</p>
                  </div>
                  <div>
                    <a href="https://www.osc.ny.gov/files/reports/pdf/report-4-2026.pdf" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">NYS Comptroller: MTA Operating Revenue Trends (2026)</a>
                    <p className="text-gray-600 text-sm mt-1">Independent confirmation of MTA farebox revenue trends post-pandemic.</p>
                  </div>
                </div>
              </div>

              {/* Policy Context */}
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight">Policy Context</h3>
                  <p className="text-gray-500 text-sm mt-2">Reporting on the Mamdani free-buses proposal.</p>
                </div>
                <div className="md:col-span-8 space-y-3 text-base">
                  <div>
                    <a href="https://www.cbsnews.com/newyork/news/zohran-mamdani-new-york-city-free-buses/" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">CBS New York: Mamdani's free-buses plan and how it gets paid for</a>
                    <p className="text-gray-600 text-sm mt-1">Primary source on the administration's $700M cost estimate.</p>
                  </div>
                  <div>
                    <a href="https://ny1.com/nyc/all-boroughs/traffic_and_transit/2026/05/11/meet-mamdani-senior-advisor-for-fast-and-free-buses" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">NY1: Mamdani creates new role focused on fast, free buses (May 2026)</a>
                    <p className="text-gray-600 text-sm mt-1">Confirms the proposal is active policy under the current administration.</p>
                  </div>
                  <div>
                    <a href="https://www.amny.com/news/fiscal-watchdog-mamdanis-free-bus-not-affordable-fair-fares-expansion/" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-gray-600">amNewYork: Fiscal watchdog on the cost of fare-free buses</a>
                    <p className="text-gray-600 text-sm mt-1">Independent cost estimate (~$900M); the MTA's own estimate is ~$1B factoring in induced demand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-24 pb-12">
           <div className="flex flex-col items-center text-center">
             <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">06. Contact</h2>
             <p className="text-2xl mb-12 max-w-2xl font-light text-gray-600">
               Interested in the raw data or methodology? Get in touch to discuss this project further.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-lg font-mono">
               <div>
                 <p className="text-gray-400 mb-2 uppercase text-xs tracking-widest">Email</p>
                 <a href="mailto:iamcharlesvargas@gmail.com" className="hover:text-gray-600 transition-colors text-sm md:text-base">iamcharlesvargas@gmail.com</a>
               </div>
               <div>
                 <p className="text-gray-400 mb-2 uppercase text-xs tracking-widest">LinkedIn</p>
                 <a href="https://www.linkedin.com/in/charlie2bored/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors text-sm md:text-base">charlie2bored</a>
               </div>
               <div>
                 <p className="text-gray-400 mb-2 uppercase text-xs tracking-widest">GitHub</p>
                 <a href="https://github.com/charlie2bored/NYC-Fare-Systems" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors text-sm md:text-base">NYC-Fare-Systems</a>
               </div>
               <div>
                 <p className="text-gray-400 mb-2 uppercase text-xs tracking-widest">Website</p>
                 <a href="https://charlie2bored.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors text-sm md:text-base">charlie2bored.com</a>
               </div>
             </div>
           </div>
        </section>

      </main>

      <footer className="border-t border-gray-200 py-12 bg-white text-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-500">
          <p>© 2025 NYC FARE SYSTEMS PROJECT</p>
          <div className="flex gap-4">
             <a href="#home" className="hover:text-black transition-colors">BACK TO TOP</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
