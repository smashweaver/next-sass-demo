import Image from "next/image";

const SvgIcon = ({ mask, className }) => {
  return (
    <svg className={`${className}`}>
      <use xlinkHref={`/img/sprite.svg#${mask}`} />
    </svg>
  );
};

export default SvgIcon;
