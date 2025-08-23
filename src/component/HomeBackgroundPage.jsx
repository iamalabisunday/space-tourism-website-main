import Background from "../component/assets/home/background-home-desktop.jpg";
import BackgroundMobile from "../component/assets/home/background-home-mobile.jpg";
import BackgroundTablet from "../component/assets/home/background-home-tablet.jpg";

export default function HomeBackgroundPage() {
  return (
    <>
      <main>
        <div>
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
      </main>
    </>
  );
}
