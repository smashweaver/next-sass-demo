import SideBar from "./ui/home/content/sidebar";
import Gallery from "./ui/home/content/hotel/gallery";
import Overview from "./ui/home/content/hotel/overview";
import Description from "./ui/home/content/detail/description";
import Reviews from "./ui/home/content/detail/reviews";
import CallToAction from "./ui/home/content/call-to-action";
import Header from "./ui/home/header/header";

export default function Page() {
  return (
    <>
      <Header />
      <div className="content">
        <SideBar />

        <main className="hotel-view">
          <Gallery />

          <Overview />

          <div className="detail">
            <Description />
            <Reviews />
          </div>

          <CallToAction />
        </main>
      </div>
    </>
  );
}
