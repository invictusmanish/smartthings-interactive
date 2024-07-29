import { Fragment } from 'react';
import { ROOM_NAMES } from '../../utility/constant';

export const SmartThings = {
  title: 'Your home speaks you',
  caption: 'With SmartThings',
  description: <Fragment>Select a room below to explore how SmartThings app seamlessly <br className='hidden sm:block' /> integrates your home&apos;s smart devices.</Fragment>,
};

export const ROOMS_DATA_DESKTOP = {
  [ROOM_NAMES.AISHA]: {
    image: 'desktop/Aisha.png',
    title: 'Hustle From Home',
    hoverImage: 'desktop/Aisha-hover.png',
  },
  [ROOM_NAMES.EDDIE]: {
    image: 'desktop/Eddie.png',
    title: 'Party Time',
    hoverImage: 'desktop/Eddie-hover.png',
  },
  [ROOM_NAMES.ERIC]: {
    image: 'desktop/Eric.png',
    title: 'Optimize Energy',
    hoverImage: 'desktop/Eric-hover.png',
  },
  [ROOM_NAMES.CARLITA]: {
    image: 'desktop/Carlita.png',
    title: 'Self Care',
    hoverImage: 'desktop/Carlita-hover.png',
  },
  [ROOM_NAMES.MALIK]: {
    image: 'desktop/Malik.png',
    title: 'Meal Prep',
    hoverImage: 'desktop/Malik-hover.png',
  },
  [ROOM_NAMES.FRAN]: {
    image: 'desktop/Fran.png',
    title: 'Family Care',
    hoverImage: 'desktop/Fran-hover.png',
  },
};

export const ROOMS_DATA_MOBILE = {
  [ROOM_NAMES.AISHA]: {
    image: 'landing-page/mobile/Aisha-Isometric-679x375-Mo.png',
    title: 'Hustle From Home',
  },
  [ROOM_NAMES.EDDIE]: {
    image: 'landing-page/mobile/Eddie-Isometric-679x375-Mo.png',
    title: 'Party Time',
  },
  [ROOM_NAMES.ERIC]: {
    image: 'landing-page/mobile/Eric-Isometric-679x375-Mo.png',
    title: 'Optimize Energy',
  },
  [ROOM_NAMES.CARLITA]: {
    image: 'landing-page/mobile/Carlita-Isometric-679x375-Mo.png',
    title: 'Self Care',
  },
  [ROOM_NAMES.MALIK]: {
    image: 'landing-page/mobile/Malik-Isometric-679x375-Mo.png',
    title: 'Meal Prep',
  },
  [ROOM_NAMES.FRAN]: {
    image: 'landing-page/mobile/Fran-Isometric-679x375-Mo.png',
    title: 'Family Care',
  },
};
