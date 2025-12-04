import { Link } from "react-router-dom";
const Message = () => {
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
      <div className="relative z-10 text-center p-8 flex flex-col items-center justify-between rounded-2xl shadow-xl backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-sans  text-gray-700 mb-2">
          Happy Birthday baby 🎂❤️
        </h1>

        <p className="md:text-2xl  my-5 font-cursive text-gray-700">
          Another year older,budi huna lagyau hai aba,Happy Birthday my love 🥹,Im beyond grateful that i get to spend my time with you.Things arent always perfect but what matters most is that we always choose each other in the end.I Feel so lucky to have you.I love how you make me laugh and teme aye paxi i have never felt alone.I wish i get to celebrate every birthday together , this one we cant but we need to celebrate every other one together.You are my comfort,my safe place and my partner in everythingg laaaaaaaaaa.Im so proud of how far we've come and i know there is still so much we have to explore and look forward to together.Kuch vi ho jaye mai sir tumko cahungaaaa.I love uuuuuuuuuuuuuuu❤️❤️. I miss u lastai yar.Kahila hola hami vetna yar.
          Again,Happy Birthday My baby,my love,mero budi ,pasandida aurat,soulmate, partner,best friend and my everything ❤️❤️
        </p>

        <div className="flex gap-5 justify-center">
          <Link to={"/"}>
            <button className="px-6 py-2 border text-sm border-gray-600 rounded-full hover:bg-gray-200 transition">
              return
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;
