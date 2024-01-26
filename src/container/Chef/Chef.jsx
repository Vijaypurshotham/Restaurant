import "./Chef.css";

import { images } from "../../constants";
import Subheading from "../../components/SubHeading/Subheading";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef image" />
      </div>
      <div className="app__wrapper_info">
        <Subheading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quotes" />
            <p className="p__opensans">
              Chefs don't make mistakes; they make new dishes.
            </p>
          </div>
          <p className="p__opensans">
            I started cooking professionally because I had hit a point in my
            life where I was just sort of lost and cooking was something I had
            always loved and so I grabbed onto it.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="author sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
