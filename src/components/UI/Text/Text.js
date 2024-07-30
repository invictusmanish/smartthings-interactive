const Text = (props) => {
  const className = props.className ? props.className : '';
  if (props.as === 'title') {
    return (
      <p className={`text-[26px] leading-[33px] font-bold text-center lg:text-[48px] lg:leading-[38px] ${className}`}>
        {props.children}
      </p>
    );
  } else if (props.as === 'caption') {
    return (
      <p className={`text-[14px] leading-[17px] font-SamsungOne font-bold text-center lg:text-[16px] ${className}`}>
        {props.children}
      </p>
    );
  } else if (props.as === 'subTitle') {
    return (
      <p className={`text-[16px] leading-[22px] font-SamsungOne font-bold text-center lg:text-[20px] ${className}`}>
        {props.children}
      </p>
    );
  } else if (props.as === 'description') {
    return <p className={`text-[14px] leading-[19px] font-normal font-SamsungOne text-center lg:text-[18px] lg:leading-[28px] ${className}`}>{props.children}</p>;
  } else {
    return <p className={`${className}`}>{props.children}</p>;
  }
};

export default Text;
