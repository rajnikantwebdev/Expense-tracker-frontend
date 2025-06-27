export default function Navbar() {
  return (
    <nav className="shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Heading */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">expT</h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Add expense
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}