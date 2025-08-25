import Background from "../component/assets/technology/background-technology-desktop.jpg";
import BackgroundMobile from "../component/assets/technology/background-technology-mobile.jpg";
import BackgroundTablet from "../component/assets/technology/background-technology-tablet.jpg";
import NavBar from "../component/NavBar.jsx";

export default function Technology() {
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
