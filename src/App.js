import "./App.css";
import PreNavbar from "./component/PreNavbar";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider.js";
import Offers from "./component/Offers.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "./data/data.json";
import Heading from "./component/Heading.js";
import StarProduct from "./component/StarProduct.js";
import HotAccessoriesMenu from "./component/HotAccessoriesMenu";
import HotAccessories from "./component/HotAccessories";
import ProductReviews from "./component/ProductReviews.js";
import Video from "./component/Video.js";
import Banner from "./component/Banner.js";
import Footer from "./component/Footer.js";
import NavOptions from "./component/NavOptions.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>

      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>

      <Route exact path="/home">
        <HotAccessories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>

      <Route exact path="/lifestyle">
        <HotAccessories
          lifestyle={data.hotAccessories.lifeStyle}
          lifestyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>

      <Route exact path="/mobile">
        <HotAccessories
          mobile={data.hotAccessories.mobileAccessories}
          mobileCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Video videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
