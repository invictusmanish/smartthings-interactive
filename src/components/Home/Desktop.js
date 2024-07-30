import { ROOMS_DATA_DESKTOP } from '../../pages/Home/Home.data';
import { baseImagePath } from '../../utility/utility';
import HotspotGif from '../Hotspot/Hotspot';

const DesktopRooms = () => {
  return (
    <div className="ml-10 grid grid-cols-1 lg:grid-cols-3 h-full">
      {Object.values(ROOMS_DATA_DESKTOP).map((room, index) => {
        let roomStyle = { top: `` };
        if (index === 0) {
          roomStyle = { top: `-35%` };
        }
        if (index === 2) {
          roomStyle = { top: `-25%` };
        }
        if (index === 3) {
          roomStyle = { top: `-35%` };
        }
        if (index === 5) {
          roomStyle = { top: `-25%` };
        }
        return (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg h-full`}
            style={roomStyle}
          >
            <img
              src={baseImagePath(room.image)}
              alt={room.title}
              className="object-contain h-full transition-opacity duration-300 group-hover:opacity-30 relative z-[1]"
            />
            <img
              src={baseImagePath(room.hoverImage)}
              alt={`${room.title} hover`}
              className="absolute z-[1] h-full inset-0 object-contain opacity-0 group-hover:opacity-80 transition-opacity duration-300"
            />
            <img
              src={baseImagePath('desktop/Shadow.png')}
              alt={`${room.title} shadow`}
              className="absolute -bottom-[20px] h-full object-contain right-[0]"
            />
            <div className="absolute inset-0 left-[22%] top-[22%] max-w-max max-h-max p-4 z-[2]">
              <div className="group-hover:hidden flex flex-col items-center justify-center">
                <HotspotGif />
                <span className="text-white text-lg font-bold">
                  {room.title}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button className="hidden group-hover:block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Room
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopRooms;
