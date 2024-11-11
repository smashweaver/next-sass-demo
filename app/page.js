import SvgIcon from "./ui/svg-icon";

export default function Page() {
  return (
    <>
      <header className="header">
        <img src="img/logo.png" alt="logo" class="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />
          <button className="search__button">
            <SvgIcon className="search__icon" mask="icon-magnifying-glass" />
          </button>
        </form>

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
              class="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Jason</span>
          </div>
        </nav>
      </header>

      <div className="content">
        <nav className="sidebar">Navigation</nav>
        <main className="hotel-view">Hotel view</main>
      </div>
    </>
  );
}
