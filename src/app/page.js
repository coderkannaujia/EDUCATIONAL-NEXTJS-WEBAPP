import Image from "next/image";

import Navbar from "./component/navbar/page";
import Landingpage from "./component/landingpage/page";
import Color from "./component/color/page";
import Featurecourse from "./component/featurecourse/page";
import Course from "./component/course/page";
import Topcategories from "./component/topcategories/page";
import Wallpaper from "./component/wallaper/page";
import Testimonials from "./component/Testimonials/page";
import Footer from "./component/footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <Color />
      <Featurecourse />
      <Course />
      <Topcategories />
      <Wallpaper />
      <Testimonials />
      <Footer />
    </>
  );
}
