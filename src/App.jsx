import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Make sure we don't run twice
    if (playerRef.current) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      // Initialize Video.js player
      const player = videojs(
        videoElement,
        {
          autoplay: true,
          controls: true,
          responsive: true,
          fluid: true,
          preload: "auto",
          muted: true, // Required for autoplay in most browsers
          playbackRates: [0.5, 1, 1.5, 2],
          controlBar: {
            volumePanel: {
              inline: false,
            },
          },
        },
        () => {
          console.log("Video.js player is ready");
        }
      );

      playerRef.current = player;
    }, 0);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className='app-container'>
      <div className='video-wrapper'>
        <div className='video-container'>
          <div data-vjs-player>
            <video
              id='my-video'
              controls
              preload='auto'
              ref={videoRef}
              className='video-js vjs-big-play-centered vjs-theme-fantasy'>
              <source src='/video/Vybcall.mp4' type='video/mp4' />
              <p className='vjs-no-js'>
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that supports HTML5 video
              </p>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
