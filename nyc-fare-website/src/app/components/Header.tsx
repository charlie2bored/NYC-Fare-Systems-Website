export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-medium text-lg">
          NYC Fare Systems
        </div>

        <div className="flex items-center space-x-8">
          <a href="#home" className="text-sm hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#objective" className="text-sm hover:text-gray-600 transition-colors">
            Methodology
          </a>
          <a href="#process" className="text-sm hover:text-gray-600 transition-colors">
            Winners & Losers
          </a>
          <a href="#findings" className="text-sm hover:text-gray-600 transition-colors">
            The Analysis
          </a>
          <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">
            The Solution
          </a>

          <div className="flex items-center space-x-4 ml-8">
            <a
              href="https://linkedin.com/company/nyc-fare-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              linkedin
            </a>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
