import { ROOMS_DATA_MOBILE } from '../../pages/Home/Home.data';
import { baseImagePath } from '../../utility/utility';
import HotspotGif from '../Hotspot/Hotspot';
import SliderComponent from '../Slider/Slider';
import Button from '../UI/Button/Button';

const MobileRooms = () => {
  const items = Object.values(ROOMS_DATA_MOBILE).map((room, index) => {
    return (
      <div
        key={index}
        className={`relative overflow-hidden rounded-lg`}
      >
        <div className="group">
          <img
            src={baseImagePath(room.image)}
            alt={room.title}
            className="object-contain w-[70%] transition-opacity duration-300 group-hover:opacity-30 relative z-[1]"
          />
          <img
            src={baseImagePath(room.hoverImage)}
            alt={`${room.title} hover`}
            className="absolute z-[1] w-[70%] inset-0 object-contain opacity-0 group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 left-[15%] top-[17%] group-hover:left-[20%] group-hover:top-[35%] max-w-max max-h-max p-4 z-[2]">
            <div className="group-hover:hidden flex flex-col items-center justify-center">
              <HotspotGif />
              <Button
                btnTheme="rooms"
                title={room.title}
                style={{ background: `${room.btnBG}` }}
              />
            </div>
            <div className="relative hidden flex-col group-hover:flex">
              <Button
                btnTheme="rooms"
                title={'Explore'}
                className={`border-white border`}
                style={{ background: `transparent` }}
              />
            </div>
          </div>
        </div>
        <img
          src={baseImagePath('mobile/LP-Shadow-Isometric-604x313-D.png')}
          alt={`${room.title} shadow`}
          className="absolute top-[0] object-contain right-[0]"
        />
      </div>
    );
  });
  console.log(items);
  return (
    <div className="mx-auto h-full">
      <SliderComponent items={items} />
    </div>
  );
};

export default MobileRooms;
