import { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../../components/UI/Text/Text';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Modal from '../../components/UI/Modal/Modal';
import { ROOM_NAMES, routes } from '../../utility/constant';
import { baseImagePath } from '../../utility/utility';
import { ROOMS_DATA_DROPDOWN } from './Header.data';

const Header = () => {
  const [isModal, setismodal] = useState(false);
  const [mobileOS, setMobileOS] = useState(null);
  const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'IOS';
    }

    if (/android/i.test(userAgent)) {
      return 'Andriod';
    }
    return 'unknown';
  };

  useEffect(() => {
    const os = getMobileOperatingSystem();
    setMobileOS(os);
  }, []);
  const navigateApp = () => {
    mobileOS == 'IOS'
      ? window.open(
          'https://apps.apple.com/us/app/smartthings/id1222822904',
          '_blank',
        )
      : window.open(
          'https://play.google.com/store/apps/details?id=com.samsung.android.oneconnect&hl=en_US&pli=1',
          '_blank',
        );
  };
  const exploreOptions = [
    {
      content: (
        <div className="py-4 pt-10 lg:hidden">
          <Text
            as="title"
            className="text-center"
          >
            Connect Your Life
          </Text>
        </div>
      ),
    },
    {
      content: (
        <div className="flex justify-center items-center mb-5 gap-6 lg:hidden">
          <div>
            <Button
              title={<Fragment>Download App &#x2197;</Fragment>}
              onClick={navigateApp}
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="py-4 lg:hidden text-center">
          <Button
            title={<Fragment>Learn more &#x2197;</Fragment>}
            btnTheme="custom"
            className="font-semibold underline"
          />
        </div>
      ),
    },
    {
      content: (
        <div className="py-4 pt-10">
          <Text
            as="title"
            className="text-center"
          >
            Explore More Rooms
          </Text>
        </div>
      ),
    },
    {
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2 sm:px-6 pb-20 text-center">
          <Card
            {...ROOMS_DATA_DROPDOWN[ROOM_NAMES.AISHA]}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...ROOMS_DATA_DROPDOWN[ROOM_NAMES.EDDIE]}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...ROOMS_DATA_DROPDOWN[ROOM_NAMES.ERIC]}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...ROOMS_DATA_DROPDOWN[ROOM_NAMES.CARLITA]}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...ROOMS_DATA_DROPDOWN[ROOM_NAMES.MALIK]}
            ctaLink={routes.USE_CASE_CARLITA}
          />
          <Card
            {...ROOMS_DATA_DROPDOWN[ROOM_NAMES.FRAN]}
            ctaLink={routes.USE_CASE_CARLITA}
          />
        </div>
      ),
    },
  ];
  return (
    <header className="bg-white py-2 px-4 flex justify-between items-center sticky top-0 z-50 shadow-md width-[55px]">
      <NavLink
        to={'/'}
        className={`flex items-center`}
      >
        <img
          src={baseImagePath('common/Logo.png')}
          alt="SmartThings"
          className="w-9 h-9 rounded-full"
        />
        <Text
          as="subTitle"
          className="font-bold"
        >
          &nbsp;SmartThings
        </Text>
      </NavLink>
      <div className="flex items-center gap-2">
        <Button
          title={'Download App'}
          btnTheme="transparent"
          className="hidden lg:block"
          onClick={() => setismodal(!isModal)}
        />
        <Dropdown
          options={exploreOptions}
          fullWidth={true}
          dropdownListClassName={`bg-gray-100 py-2 px-2`}
          title={'Explore'}
        />
      </div>
      <Modal
        show={isModal}
        onClose={() => setismodal(!isModal)}
      >
        <div className="px-14">
          <div className="text-center  mb-4">
            <Text as="subTitle">
              Download the <br /> SmartThings app
            </Text>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <img
                src={baseImagePath('common/qr.png')}
                className="w-96 h-27"
              />
            </div>
            <div className="text-left">
              <Text>
                Use your phone as personal camera to help monitor and improve
                your form during workouts
              </Text>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <div className="mr-3">
              <a
                href={
                  'https://play.google.com/store/apps/details?id=com.samsung.android.oneconnect&hl=en_US&pli=1'
                }
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <img
                  className=""
                  src={baseImagePath(
                    'common/dropdown/Icon-DownloadApp-Googleplay-D.png',
                  )}
                  alt="Play Store"
                />
              </a>
            </div>
            <div className="ml-3">
              <a
                href={'https://apps.apple.com/us/app/smartthings/id1222822904'}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <img
                  className=""
                  src={baseImagePath(
                    'common/dropdown/Icon-DownloadApp-Appstore-D.png',
                  )}
                  alt="App Store"
                />
              </a>
            </div>
          </div>
          <div className="text-center  mb-4">
            <Button
              title={<Fragment>Learn more &#x2197;</Fragment>}
              btnTheme="custom"
              className="font-semibold underline"
            />
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
