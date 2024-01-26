import "./Intro.css";

import { BsFillPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import { useRef, useState } from "react";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevvideo) => !prevvideo);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={videoRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
