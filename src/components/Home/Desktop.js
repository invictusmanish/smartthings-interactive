import { ROOMS_DATA_DESKTOP } from '../../pages/Home/Home.data';
import { baseImageSamsungPath } from '../../utility/utility';
import HotspotGif from '../Hotspot/Hotspot';
import Button from '../UI/Button/Button';

const DesktopRooms = () => {
  return (
    <div className="ml-10 grid grid-cols-1 md:grid-cols-3 h-full">
      {Object.values(ROOMS_DATA_DESKTOP).map((room, index) => {
        let roomStyle = { top: `` };
        if (index === 0) {
          roomStyle = { top: `-35%` };
        }
        if (index === 1) {
          roomStyle = { left: `8%` };
        }
        if (index === 2) {
          roomStyle = { top: `-20%`, left: '8%' };
        }
        if (index === 3) {
          roomStyle = { top: `-35%` };
        }
        if (index === 4) {
          roomStyle = { left: `8%` };
        }
        if (index === 5) {
          roomStyle = { top: `-20%`, left: '8%' };
        }
        // console.log(room);
        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg`}
            style={roomStyle}
          >
            <div className="group">
              <img
                src={baseImageSamsungPath(room.image)}
                alt={room.title}
                className="object-contain w-[70%] transition-opacity duration-300 group-hover:opacity-30 relative z-[1]"
              />
              <img
                src={baseImageSamsungPath(room.hoverImage)}
                alt={`${room.title} hover`}
                className="absolute z-[1] w-[70%] inset-0 object-contain opacity-0 group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 left-[15%] top-[10%] group-hover:left-[20%] group-hover:top-[35%] max-w-max max-h-max p-4 z-[2]">
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
              src={baseImageSamsungPath('desktop/Shadow-old.png')}
              alt={`${room.title} shadow`}
              className="absolute top-[0] object-contain right-[0]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default DesktopRooms;
