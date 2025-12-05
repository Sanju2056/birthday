import { useState } from "react";
import { Link } from "react-router-dom";
import { t0, t1, t2, t3, v0, v1, v2, v3 } from "../../assets/music";

export default function Music() {
  const videos = [
    {
      title: "Happy Birthday Baby❤️",
      file: v0,
      thumb: t0,
    },
    {
      title: "Before Leaving 🥺",
      file: v1,
      thumb: t1,
    },
    {
      title: "Random Vlogs 🎥",
      file:v2,
      thumb: t2
    },
    {
      title: "Riding Video 🏍️",
      file: v3,
      thumb: t3,
    },
    
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        className="
        w-full 
        max-w-[1400px] 
        bg-white 
        text-gray-900 
        rounded-2xl 
        shadow-xl 
        p-6 
        flex 
        flex-col 
        lg:flex-row 
        gap-10"
      >
        {/* Main Video Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold font-cursive mb-4 text-gray-800">
            {currentVideo.title}
          </h1>

          <div className="w-full h-[50vw] lg:h-[500px] rounded-xl overflow-hidden bg-[#EDEAEA] shadow-md">
            <video
              key={currentVideo.file}
              className="w-full h-full object-cover"
              controls
            >
              <source src={currentVideo.file} type="video/mp4" />
            </video>
          </div>
          <div className="flex gap-5 mt-5 justify-center">
            <Link to={"/yes"}>
              <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
                return{" "}
              </button>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[330px]  p-5 rounded-xl shadow-inner h-fit max-h-[600px] overflow-y-auto">
          <h2 className="text-lg font-semibold text-[#C17474] mb-4">
            Other Videos
          </h2>

          <div className="flex flex-col gap-4">
            {videos.map((vid, i) => {
              const active = vid.title === currentVideo.title;

              return (
                <button
                  key={i}
                  onClick={() => setCurrentVideo(vid)}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all 
                    ${
                      active
                        ? "bg-[#C17474]/20 border border-[#C17474]"
                        : "bg-white hover:bg-[#F7F3F3] shadow-sm"
                    }
                  `}
                >
                  <img
                    src={vid.thumb}
                    alt={vid.title}
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <p className="text-sm font-medium text-gray-800">
                    {vid.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
