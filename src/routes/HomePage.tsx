import { OursBrands } from "../components/brands/OursBrands";
// import { Inovation } from "../components/pagesComponents/Inovation";
import { SwitchFuture } from "../components/pagesComponents/SwitchFuture";
// import { motion } from "framer-motion";
import { OurSolutions } from "../components/pagesComponents/OurSolutions";
import { ReviewsComponent } from "../components/reviews/ReviewsComponent";
import { ContactComponent } from "../components/forms/ContactComponent";
import { Helmet } from "react-helmet";
import { brandImagesNew } from "../constants/data";
import Areas from "../components/AreaServices/Areas";
// import { Grid as MuiGrid } from "@mui/material";
import { ExpertiseComponent } from "../components/pagesComponents/ExpertiseComponent";

export const HomePage = () => {
  // const Grid = motion(MuiGrid);
  return (
    <>
      <Helmet>
        <title>ecoWave | Renewable Energy | Solar Energy in Beverly, MA</title>
        <meta
          name="description"
          content="Our solar installation company in Beverly offers solar battery storage, EV charger installations, electric heat pumps and more. Call 978-500-4081 to get started!"
        />
      </Helmet>
      <SwitchFuture />
      <OursBrands images={brandImagesNew} />
      {/* <Inovation
          title="Expertise at Great Prices"
          content="At EcowaveUS, we specialize in providing sustainable energy solutions, including heat pumps, EV chargers, energy storage and solar panels - all designed to maximize energy efficiency and savings. We are passionate about leading the clean energy transition and empowering our clients with the tools and knowledge to create a cleaner, greener, and more cost-effective future for generations to come."
          images={[
            {
              img: "/images/innovation-02.png",
              title: "ev-charger",
            },
            {
              img: "/images/innovation-05.png",
              title: "heat-pumps",
            },
            {
              img: "/images/innovation-06.png",
              title: "energy-storage",
            },
          ]}
          logo="/images/logo-ecowave.png"
        /> */}
      <ExpertiseComponent />
      <OurSolutions />
      <ReviewsComponent />
      <ContactComponent cat={1} />
      <Areas />
    </>
  );
};
