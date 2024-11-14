import Logo from "./logo";
import Search from "./search";
import User from "./user";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Search />
      <User />
    </header>
  );
};

export default Header;
