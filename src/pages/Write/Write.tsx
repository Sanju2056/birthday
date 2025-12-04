import { Link } from "react-router-dom";
import { p11, p14, p16, p23, p24, p26, m1 } from "../../assets/images";

const photo = [
  { img: p24, caption: "Our first photo together ❤️" },
  { img: p16, caption: "First Family Function Together" },
  { img: p23, caption: "Hamro 1st Birthday" },
  { img: p14, caption: "Hami kate hasetheyau yo photo haru line bela" },
  { img: p26, caption: "Visa lagyo vanerw grace le tika lagaideko" },
  { img: p11, caption: "Yo photo paxi hamro bedroom ma hunxa" },
];

const Photo = () => {
  return (
    // UPDATED LINE BELOW: Changed justify-start to md:justify-center
    <div className="relative w-full min-h-screen bg-gray-100 flex flex-col items-center justify-start md:justify-center overflow-x-hidden">
      {/* FLOATING HEARTS - Changed absolute to fixed so they cover screen during scroll */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
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

      {/* SPARKLES - Changed absolute to fixed */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
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

      {/* MAIN CONTENT */}
      <div className="w-full max-w-5xl px-4 py-10 z-10">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          {/* FLEX LAYOUT - STACK ON MOBILE */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <h1 className="text-3xl underline font-bold font-cursive">
                A short glimpse of us !
              </h1>
              <video
                src={m1}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg object-cover w-full"
              ></video>

              {/* <img
                src={p8}
                className="rounded-lg object-cover w-full"
                alt="Left Main"
              /> */}
            </div>

            {/* RIGHT SIDE GRID */}
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {photo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* <div className="border-2 border-[#D7A1A1] rounded-full flex items-center justify-center "> */}
                  <img
                    src={item.img}
                    className="w-36 h-36 sm:w-40 sm:h-40 border-4 border-[#D7A1A1] rounded-full object-cover mb-2"
                    alt="circle"
                  />
                  {/* </div> */}
                  <p className="text-sm font-sans">"{item.caption}"</p>
                </div>
              ))}

              {/* RETURN BUTTON */}
              <div className="col-span-2 sm:col-span-3 flex justify-center">
                <Link to="/yes">
                  <button className="px-10 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
                    return
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
