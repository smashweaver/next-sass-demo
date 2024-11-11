import Header from "./ui/header/header";

export default function Page() {
  return (
    <>
      <Header />

      <div className="content">
        <nav className="sidebar">Navigation</nav>
        <main className="hotel-view">Hotel view</main>
      </div>
    </>
  );
}
