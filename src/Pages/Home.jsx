import Background from "../component/assets/home/background-home-desktop.jpg";
import BackgroundMobile from "../component/assets/home/background-home-mobile.jpg";
import BackgroundTablet from "../component/assets/home/background-home-tablet.jpg";
import SpaceLogo from "../component/SpaceLogo.jsx";
import NavBar from "../component/NavBar.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen my-auto relative">
      {/* Navigation Section */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center">
        <NavBar />
      </header>
      {/* Background Section */}
      <picture>
        <source media="(max-width: 600px)" srcSet={BackgroundMobile} />
        <source media="(max-width: 992px)" srcSet={BackgroundTablet} />
        <img
          src={Background}
          alt="Background"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </picture>
    </div>
  );
}
