import SvgIcon from "../svg-icon";
import Logo from "./logo";
import SearchForm from "./search-form";
import UserNav from "./user-nav";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SearchForm />
      <UserNav />
    </header>
  );
};

export default Header;
