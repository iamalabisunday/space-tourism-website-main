import HomeBackgroundPage from "../component/HomeBackgroundPage.jsx";
import NavBar from "../component/NavBar.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      {/* Navigation Section */}
      <header>
        <NavBar />
      </header>
      <section>
        <HomeBackgroundPage />
      </section>
    </div>
  );
}
