import SvgIcon from "../shared/svg-icon";

const Search = () => {
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

export default Search;
