import "./Header.css";
import { images } from "../../constants";
import Subheading from "../../components/SubHeading/Subheading";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        {/* Below we have implemented subheading component */}
        <Subheading title="Chase the new flavour" />
        <h1 className="app_header-h1">The Key to fine Dining</h1>
        <p className="open-sans" style={{ margin: "2rem 0" }}>
          To make your captions taste as good as the food itself,Don’t be afraid
          to play with puns, food-related jokes, or clever wordplay to add a
          dash of flavor to your captions.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app_wrapper_img">
        <img src={images.welcome} alt="header image" />
      </div>
    </div>
  );
};

export default Header;
