import Cta from "./cta";
import Detail from "./detail/detail";
import Gallery from "./gallery";
import Overview from "./overview";

const HotelView = () => {
  return (
    <main className="hotel-view">
      <Gallery />

      <Overview />

      <Detail />

      <Cta /> 
    </main>
  );
};

export default HotelView;
