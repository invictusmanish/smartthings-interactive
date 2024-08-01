import DesktopRooms from '../../components/Home/Desktop';
import MobileRooms from '../../components/Home/Mobile';
import Text from '../../components/UI/Text/Text';
import { SmartThings } from './Home.data';
import { useState } from 'react';
import VideoPlayer from '../../components/UI/VideoPlayer/VideoPlayer';
import { baseImageSamsungPath } from '../../utility/utility';

const Home = () => {
  const [showBackground, setShowBackground] = useState(true);

  const handleVideoEnd = () => {
    console.log('Video ended');
    setShowBackground(true);
  };

  if (!showBackground) {
    return (
      <section>
        <div className="hidden lg:block video-container">
          <VideoPlayer
            videoSrc={baseImageSamsungPath(
              'desktop/LandingPage_Intro_Desktop_1440x810_H.265.mp4',
            )}
            onVideoEnd={handleVideoEnd}
            videoId="desktop-video"
          />
        </div>
        <div className="lg:hidden h-screen video-container">
          <VideoPlayer
            videoSrc={baseImageSamsungPath(
              'mobile/LandingPage_Mobile_720x1096_H.265.mp4',
            )}
            onVideoEnd={handleVideoEnd}
            videoId="mobile-video"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-mobile-hero md:bg-hero px-4 py-4">
      <div className="home-page-wrapper h-full">
        <div className="py-[7px] px-[10px] lg:py-4">
          <Text as="caption">{SmartThings.caption}</Text>
          <Text
            as="title"
            className="py-[7px] xl:py-4"
          >
            {SmartThings.title}
          </Text>
          <Text as="description">{SmartThings.description}</Text>
        </div>
        <div className="hidden md:block relative">
          <DesktopRooms />
        </div>
        <div className="md:hidden">
          <MobileRooms />
        </div>
      </div>
    </section>
  );
};

export default Home;
