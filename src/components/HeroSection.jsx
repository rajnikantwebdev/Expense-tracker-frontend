import { FaRupeeSign} from "react-icons/fa";
import { MdSavings } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Track Your
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}
            Expenses
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Take control of your finances with our intuitive expense tracking
          platform. Monitor spending, and achieve your financial
          goals effortlessly.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Start Tracking Now
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center animate-bounce">
          <p className="text-gray-500 text-sm mb-2 font-medium">
            Scroll down to find your expenses
          </p>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-700 font-medium">
            $2,450 saved
          </span>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span className="text-sm text-gray-700 font-medium">
            23 expenses tracked
          </span>
        </div>
      </div>
    </div>
  );
}