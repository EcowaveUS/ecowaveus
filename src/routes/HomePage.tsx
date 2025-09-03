import { OursBrands } from "../components/brands/OursBrands";
// import { Inovation } from "../components/pagesComponents/Inovation";
import { SwitchFuture } from "../components/pagesComponents/SwitchFuture";
// import { motion } from "framer-motion";
import { OurSolutions } from "../components/pagesComponents/OurSolutions";
import { ReviewsComponent } from "../components/reviews/ReviewsComponent";
import { ContactComponent } from "../components/forms/ContactComponent";
import { Helmet } from "react-helmet-async";
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
      <ExpertiseComponent />
      <OurSolutions />
      <ReviewsComponent cat={2} />
      <ContactComponent cat={1} />
      <Areas />
    </>
  );
};
