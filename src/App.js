import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (videoRef.current) {
      nextIsPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
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
