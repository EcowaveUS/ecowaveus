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
import SchemaMarkup from "../components/seo/SchemaMarkup";
import { Decarbonization } from "../components/pagesComponents/Decarbonization";

export const HomePage = () => {
  // const Grid = motion(MuiGrid);
  return (
    <>
      <Helmet>
        <title>Heat Pumps & HVAC in Beverly, MA | EcowaveUS</title>
        <meta
          name="description"
          content="Professional heat pump & HVAC installation in Beverly, MA. Mass Save rebates available. Energy-efficient heating & cooling solutions. Call EcowaveUS at 978-500-4081 for free estimate!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ecowaveus.com/" />
      </Helmet>
      <SchemaMarkup type="LocalBusiness" />
      <SwitchFuture />
      <OursBrands images={brandImagesNew} />
      <ExpertiseComponent />
      <OurSolutions />
      <Decarbonization />
      <ReviewsComponent cat={2} />
      <ContactComponent cat={1} />
      <Areas />
    </>
  );
};
