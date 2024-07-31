import { useEffect } from 'react';

const VideoPlayer = ({ videoSrc, onVideoEnd, videoId }) => {
  useEffect(() => {
    const videoElement = document.getElementById(videoId);
    console.log(`VideoPlayer mounted for ${videoId}`);
    if (videoElement) {
      videoElement.addEventListener('ended', onVideoEnd);
      console.log(`Event listener added for ${videoId}`);
    } else {
      console.log(`Video element not found for ${videoId}`);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', onVideoEnd);
        console.log(`Event listener removed for ${videoId}`);
      }
    };
  }, [onVideoEnd, videoId]);

  return (
    <video
      id={videoId}
      className="container object-contain absolute inset-0"
      src={videoSrc}
      autoPlay
      muted
    />
  );
};

export default VideoPlayer;
