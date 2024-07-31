import { NavLink } from 'react-router-dom';

const Button = (props) => {
  const className = props.className ? props.className : '';
  const isLinkProvided = !!props.link;
  const isOnClickProvided = !!props.onClick;
  const shouldRenderNavLink = isLinkProvided && !isOnClickProvided;
  if (props.btnTheme === 'transparent') {
    const themeClassName = `text-black font-SamsungOne py-2.5 px-6 rounded-full bg-transparent ${className}`;
    if (shouldRenderNavLink) {
      return (
        <NavLink
          to={props.link}
          className={themeClassName}
        >
          {props.title}
        </NavLink>
      );
    }
    return (
      <button
        onClick={props.onClick}
        className={themeClassName}
      >
        {props.title}
      </button>
    );
  } else if (props.btnTheme === 'rooms') {
    const themeClassName = `${className} font-SamsungSharpSans px-2 text-white font-bold text-[12px] leading-[14px] shadow-room-btn-mob rounded-[20px] xl:text-[18px] xl:leading-[38px] xl:shadow-room-btn xl:rounded-[30px]`;
    // console.log(themeClassName, "THEME")
    if (shouldRenderNavLink) {
      return (
        <NavLink
          to={props.link}
          className={themeClassName}
        >
          {props.title}
        </NavLink>
      );
    }
    return (
      <button
        onClick={props.onClick}
        className={themeClassName}
        type="button"
        style={props.style}
      >
        {props.title}
      </button>
    );
  } else if (props.btnTheme === 'custom') {
    const themeClassName = `font-SamsungOne rounded-full ${className}`;
    if (shouldRenderNavLink) {
      return (
        <NavLink
          to={props.link}
          className={themeClassName}
        >
          {props.title}
        </NavLink>
      );
    }
    return (
      <button
        onClick={props.onClick}
        className={themeClassName}
      >
        {props.title}
      </button>
    );
  } else {
    const themeClassName = `bg-black font-bold text-sm font-SamsungOne text-white py-2.5 px-6 rounded-full shadow-lg group-hover:bg-[#dddddd] group-hover:text-[#acacac] ${className}`;
    if (shouldRenderNavLink) {
      return (
        <NavLink
          to={props.link}
          className={themeClassName}
        >
          {props.title}
        </NavLink>
      );
    } else {
      return (
        <button
          onClick={props.onClick}
          className={themeClassName}
        >
          {props.title}
        </button>
      );
    }
  }
};

export default Button;
