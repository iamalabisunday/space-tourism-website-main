import Background from "../component/assets/crew/background-crew-desktop.jpg";
import BackgroundMobile from "../component/assets/crew/background-crew-mobile.jpg";
import BackgroundTablet from "../component/assets/crew/background-crew-tablet.jpg";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";

export default function Crew() {
  return (
    <div className="w-full h-screen my-auto relative">
      {/* Navigation Section */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center">
        {/* Laptop (lg and up) */}
        <div className="w-full hidden lg:block">
          <NavBar />
        </div>

        {/* Tablet (sm to lg-1) */}
        <div className="w-full hidden sm:block lg:hidden">
          <NavBarTable />
        </div>

        {/* Phone (below sm) */}
        <div className="w-full block sm:hidden">
          <NavBarPhone />
        </div>
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
