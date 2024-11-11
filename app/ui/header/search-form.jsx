import SvgIcon from "../svg-icon";

const SearchForm = () => {
  return (
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
  );
};

export default SearchForm;
