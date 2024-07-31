import { Fragment } from 'react';
import { ROOM_NAMES } from '../../utility/constant';
import { hexToRgba } from '../../utility/utility';

export const SmartThings = {
  title: 'Your home speaks you',
  caption: 'With SmartThings',
  description: (
    <Fragment>
      Select a room below to explore how SmartThings app seamlessly{' '}
      <br className="hidden sm:block" /> integrates your home&apos;s smart
      devices.
    </Fragment>
  ),
};

export const ROOMS_DATA_DESKTOP = {
  [ROOM_NAMES.AISHA]: {
    image: 'desktop/Aisha.png',
    title: 'Hustle From Home',
    hoverImage: 'desktop/Aisha-hover.png',
    btnBG: hexToRgba('#52C1BA', 0.8),
  },
  [ROOM_NAMES.EDDIE]: {
    image: 'desktop/Eddie.png',
    title: 'Party Time',
    hoverImage: 'desktop/Eddie-hover.png',
    btnBG: hexToRgba('#86195a', 0.8),
  },
  [ROOM_NAMES.ERIC]: {
    image: 'desktop/Eric.png',
    title: 'Optimize Energy',
    hoverImage: 'desktop/Eric-hover.png',
    btnBG: hexToRgba('#879c81', 0.8),
  },
  [ROOM_NAMES.CARLITA]: {
    image: 'desktop/Carlita.png',
    title: 'Self Care',
    hoverImage: 'desktop/Carlita-hover.png',
    btnBG: hexToRgba('#DC7226', 0.8),
  },
  [ROOM_NAMES.MALIK]: {
    image: 'desktop/Malik.png',
    title: 'Meal Prep',
    hoverImage: 'desktop/Malik-hover.png',
    btnBG: hexToRgba('#a7e0b5', 0.8),
  },
  [ROOM_NAMES.FRAN]: {
    image: 'desktop/Fran.png',
    title: 'Family Care',
    hoverImage: 'desktop/Fran-hover.png',
    btnBG: hexToRgba('#5dabe1', 0.8),
  },
};

export const ROOMS_DATA_MOBILE = {
  [ROOM_NAMES.AISHA]: {
    image: 'mobile/LP-Aisha-Isometric-418x366-Mo.png',
    title: 'Hustle From Home',
    hoverImage: 'mobile/LP-Aisha-Isometric-Hover-418x366-Mo.png',
    btnBG: hexToRgba('#52C1BA', 0.8),
  },
  [ROOM_NAMES.CARLITA]: {
    image: 'mobile/LP-Carlita-Isometric-418x366-Mo.png',
    title: 'Self Care',
    hoverImage: 'mobile/LP-Carlita-Isometric-Hover-418x366-Mo.png',
    btnBG: hexToRgba('#DC7226', 0.8),
  },
  [ROOM_NAMES.EDDIE]: {
    image: 'mobile/LP-Eddie-Isometric-418x366-Mo.png',
    title: 'Party Time',
    hoverImage: 'mobile/LP-Eddie-Isometric-Hover-418x366-Mo.png',
    btnBG: hexToRgba('#86195a', 0.8),
  },
  [ROOM_NAMES.MALIK]: {
    image: 'mobile/LP-Malik-Isometric-418x366-Mo.png',
    title: 'Meal Prep',
    hoverImage: 'mobile/LP-Malik-Isometric-Hover-418x366-Mo.png',
    btnBG: hexToRgba('#a7e0b5', 0.8),
  },
  [ROOM_NAMES.ERIC]: {
    image: 'mobile/LP-Eric-Isometric-418x366-Mo.png',
    title: 'Optimize Energy',
    hoverImage: 'mobile/LP-Eric-Isometric-Hover-418x366-Mo.png',
    btnBG: hexToRgba('#879c81', 0.8),
  },
  [ROOM_NAMES.FRAN]: {
    image: 'mobile/LP-Fran-Isometric-418x366-Mo.png',
    title: 'Family Care',
    hoverImage: 'mobile/LP-Fran-Isometric-Hover-418x366-Mo.png',
    btnBG: hexToRgba('#5dabe1', 0.8),
  },
};
