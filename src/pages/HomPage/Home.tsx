import { Doggie } from "../../assets/images";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#FEFEFE] opacity-90 overflow-hidden">
      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 25}px`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${5 + Math.random() * 10}px`,
              animationDuration: `${1 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="relative z-10 text-center p-8  rounded-2xl shadow-xl backdrop-blur-sm">
        <img
          src={Doggie}
          alt="teddy waving"
          className="mx-auto mb-4 w-52 h-48 bg-black-solid"
        />

        <h1 className="text-3xl md:text-6xl font-cursive font-semibold text-gray-700 mb-2">
          Happy Birthday baby 🎂❤️
        </h1>

        <p className="text-gray-600 font-sans text-lg md:text-xl mb-6">
          wanna see my gift 🥹?
        </p>

        <div className="flex gap-5 justify-center font-sans">
          <Link to={"/yes"}>
            <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
              YES LOVIE ❤️
            </button>
          </Link>
          <Link to={"/no"}>
            <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
              NO THANKS 👍
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
