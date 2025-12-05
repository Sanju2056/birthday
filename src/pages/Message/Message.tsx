import { Link } from "react-router-dom";
const Message = () => {
  return (
<div className="relative w-full min-h-screen flex items-start justify-center bg-[#FEFEFE] opacity-90 overflow-y-auto">
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
      {/* <div className="relative z-10 text-center p-8 flex flex-col items-center justify-between rounded-2xl shadow-xl backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-sans  text-gray-700 mb-2">
          Happy Birthday baby 🎂❤️
        </h1>

        <p className="md:text-2xl  my-5 font-cursive text-gray-700">
          Another year older,budi huna lagyau hai aba,Happy Birthday my love 🥹,Im beyond grateful that i get to spend my time with you.Things arent always perfect but what matters most is that we always choose each other in the end.I Feel so lucky to have you.I love how you make me laugh and teme aye paxi i have never felt alone.I wish i get to celebrate every birthday together , this one we cant but we need to celebrate every other one together.You are my comfort,my safe place and my partner in everythingg laaaaaaaaaa.Im so proud of how far we've come and i know there is still so much we have to explore and look forward to together.Kuch vi ho jaye mai sir tumko cahungaaaa.I love uuuuuuuuuuuuuuu❤️❤️. I miss u lastai yar.Kahila hola hami vetna yar.
          Again,Happy Birthday My baby,my love,mero budi ,pasandida aurat,soulmate, partner,best friend and my everything ❤️❤️
        </p>

        <div className="flex gap-5 justify-center">
          <Link to={"/yes"}>
            <button className="px-6 py-2 border text-sm border-gray-600 rounded-full hover:bg-gray-200 transition">
              return
            </button>
          </Link>
        </div>
      </div> */}

      <div className="w-full  bg-gradient-to-b from-[#f7ecd3] to-[#e6d4b4] flex items-center justify-center p-6 relative  lg:mt-20">
        <div className="bg-white lg:w-[800px] rounded-xl p-8 relative border-[2px] border-gray-300 border-dashed shadow-md animate-shake-once">
          {/* POSTCARD TITLE */}
          <h2 className="text-center text-2xl tracking-[4px] font-bold text-[#C17474] mb-6">
            Post Card{" "}
          </h2>

          <div className="grid  md:grid-cols-2 gap-6 ">
            {/* LEFT SIDE CONTENT */}
            <div className="space-y-4 text-gray-950 text-lg leading-relaxed font-cursive">
              <p>Happy Birthday Baby❤️, </p>
              Another year older,budi huna lagyau hai aba,Happy Birthday my love
              🥹,Im beyond grateful that i get to spend my time with you.Things
              arent always perfect but what matters most is that we always
              choose each other in the end.I Feel so lucky to have you.I love
              how you make me laugh and teme aye paxi i have never felt alone.I
              wish i get to celebrate every birthday together , this one we cant
              but we need to celebrate every other one together.You are my
              comfort,my safe place and my partner in everythingg laaaaaaaaaa.Im
              so proud of how far we've come and i know there is still so much
              we have to explore and look forward to together.Kuch vi ho jaye
              mai sir tumko cahungaaaa.I love uuuuuuuuuuuuuuu❤️❤️. I miss u
              lastai yar.Kahila hola hami vetna yar. Again,Happy Birthday My
              baby,my love,mero budi ,pasandida aurat,soulmate, partner,best
              friend and my everything ❤️❤️
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="border-l border-gray-300 flex  flex-col justify-between pl-6">
              {/* Stamps */}
              <div className="w-full   flex items-center justify-center p-10">
                <div className="flex flex-col items-center gap-4">
                  {/* Candles */}
                  <div className="flex gap-4 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        {/* Flame */}
                        <div className="w-2 h-3 bg-yellow-300 rounded-full animate-flicker shadow-[0_0_8px_2px_rgba(255,200,0,0.8)]"></div>

                        {/* Candle */}
                        <div className="w-2 h-11 bg-[#ff9eb3] rounded-sm mt-1 border border-pink-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Frosting Layer */}
                  <div className="w-64 h-10 bg-[#ffe6f2] rounded-t-xl shadow-md flex justify-center">
                    <div className="flex gap-2 mt-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-4 bg-[#ffbfd9] rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Cake Body */}
                  <div className="w-64 h-32 bg-[#ffb6c1] rounded-b-xl border-t-4 border-pink-400 shadow-lg flex flex-col justify-center">
                    <div className="flex justify-center gap-2">
                      {/* {[...Array(6)].map((_, i) => ( */}
                      <div
                        //   key={i}
                        className="  text-lg rounded-full opacity-70"
                      >
                        Happy Birthday Baby❤️
                      </div>
                      {/* ))} */}
                    </div>
                  </div>

                  {/* Cake Plate */}
                  <div className="w-72 h-6 bg-gray-200 rounded-full shadow-inner"></div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 mb-2 text-sm">With warm wishes,</p>

                {/* Signature */}
                <p className="font-cursive text-2xl text-gray-700">
                  <span className="border-b border-gray-300 pb-1 inline-block w-full">
                    Sanju Gurung
                  </span>
                </p>
              </div>
              {/* With warm wishes */}
            </div>
            <div className="flex gap-5 justify-center">
              <Link to={"/yes"}>
                <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
                  return{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
