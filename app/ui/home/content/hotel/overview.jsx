import SvgIcon from "../../shared/svg-icon";

const Overview = () => {
  return (
    <div className="overview">
      <h1 className="overview__heading">Durian Hotel</h1>

      <div className="overview__stars">
        <SvgIcon className="overview__icon-star" mask="icon-star" />
        <SvgIcon className="overview__icon-star" mask="icon-star" />
        <SvgIcon className="overview__icon-star" mask="icon-star" />
        <SvgIcon className="overview__icon-star" mask="icon-star" />
        <SvgIcon className="overview__icon-star" mask="icon-star" />
      </div>

      <div className="overview__location">
        <SvgIcon className="overview__icon-location" mask="icon-location-pin" />
        <button className="btn-inline">Davao City, Philippines</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">9.4</div>
        <div className="overview__rating-count">1000 votes</div>
      </div>
    </div>
  );
};

export default Overview;
