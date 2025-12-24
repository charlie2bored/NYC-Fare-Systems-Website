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
              A $277M<br />
              SETBACK
            </h1>
            <p className="text-xl md:text-3xl font-light text-black/80 max-w-3xl leading-tight">
              NYC's outdated pricing model is costing millions. An analytical deep dive into the financial inefficiencies of the flat-fare system.
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
                      <p className="text-gray-600 mt-1">Applied the Haversine formula to compute geodesic distances between origin-destination pairs.</p>
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
            </div>

          </div>
        </section>

        {/* Findings */}
        <section id="findings" className="pt-24">
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">03. Key Findings</h2>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Revenue Stats Grid */}
            <div className="grid md:grid-cols-2 gap-16 text-center md:text-left">
              <div className="space-y-3">
                <span className="font-mono text-sm text-gray-500 uppercase block tracking-widest">Current Revenue</span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter block">$3.47B</span>
                <span className="font-mono text-xs text-gray-400 block">$3,465,112,435</span>
              </div>
              <div className="space-y-3">
                <span className="font-mono text-sm text-gray-500 uppercase block tracking-widest">Proposed Revenue</span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter block">$3.74B</span>
                <span className="font-mono text-xs text-gray-400 block">$3,743,071,548</span>
              </div>
            </div>

            {/* Revenue Surplus Black Box */}
            <div className="bg-black text-white p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left space-y-4">
                  <span className="font-mono text-sm text-gray-400 uppercase block tracking-widest">Revenue Surplus</span>
                  <span className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter block leading-none">+$277M</span>
                  <span className="font-mono text-sm text-gray-500 block">+$277,959,113</span>
                </div>
                <div className="space-y-6 text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-light leading-tight">
                    <strong className="font-bold">8.02%</strong> increase in farebox revenue
                  </p>
                  <div className="border-t border-gray-700 pt-6 space-y-4">
                    <p className="text-xl text-gray-300">
                      <strong className="text-white text-3xl font-bold">29%</strong> of all rides are cheaper
                    </p>
                    <p className="text-lg text-gray-500">
                      Any trip at 3.75 miles or shorter becomes cheaper or breaks even.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="pt-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">04. Conclusion</h2>
            <p className="text-2xl md:text-4xl font-medium leading-tight">
              Our model proves the MTA can both increase its annual budget by $277 Million dollars while lowering costs for close to a third of its riders.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-24 pb-12">
           <div className="flex flex-col items-center text-center">
             <h2 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-8">05. Contact</h2>
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
