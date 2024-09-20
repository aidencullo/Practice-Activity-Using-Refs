import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    if (videoRef.current) {
      if (isPlaying) {
	videoRef.current.pause();
      } else {
	videoRef.current.play();
      }
    }
    setIsPlaying(isPlaying => !isPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video width="75%" ref={videoRef}>
        <source src="/stock.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
