import DesktopRooms from '../../components/Home/Desktop';
import MobileRooms from '../../components/Home/Mobile';
import Text from '../../components/UI/Text/Text';
import { SmartThings } from './Home.data';

const Home = () => {
  return (
    <section className="bg-mobile-hero md:bg-hero px-4 py-4 h-full">
      <div className="home-page-wrapper h-full relative">
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
