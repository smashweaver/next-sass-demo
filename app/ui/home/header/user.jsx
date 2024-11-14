import SvgIcon from "../shared/svg-icon";

const User = () => {
  return (
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <SvgIcon className="user-nav__icon" mask="icon-bookmark" />
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <SvgIcon className="user-nav__icon" mask="icon-chat" />
        <span className="user-nav__notification">13</span>
      </div>
      <div className="user-nav__user">
        <img
          src="/img/jason.jpg"
          alt="User photo"
          className="user-nav__user-photo"
        />
        <span className="user-nav__user-name">Jason</span>
      </div>
    </nav>
  );
};

export default User;
