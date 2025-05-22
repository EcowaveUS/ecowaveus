import { Helmet } from "react-helmet-async";
import FreeEstimateHero from "../components/pagesComponents/freeEstimate/FreeEstimateHero";
import FreeEstimateSavings from "../components/pagesComponents/freeEstimate/FreeEstimateSavings";
import FreeEstimateAdvantage from "../components/pagesComponents/freeEstimate/FreeEstimateAdvantage";
import FreeEstimateFinancing from "../components/pagesComponents/freeEstimate/FreeEstimateFinancing";
import FreeEstimateWhyChoose from "../components/pagesComponents/freeEstimate/FreeEstimateWhyChoose";
import FreeEstimateHowWorks from "../components/pagesComponents/freeEstimate/FreeEstimateHowWorks";
import FreeEstimateMoreSolutions from "../components/pagesComponents/freeEstimate/FreeEstimateMoreSolutions";
import FreeEstimateReviews from "../components/pagesComponents/freeEstimate/FreeEstimateReviews";
import FreeEstimateContact from "../components/pagesComponents/freeEstimate/FreeEstimateContact";
import FreeEstimateServiceArea from "../components/pagesComponents/freeEstimate/FreeEstimateServiceArea";

export const FreeEstimatePage = () => {
  return (
    <>
      <Helmet>
        <title>
          Free Estimate | Renewable Energy and Solar Power in Beverly, MA
        </title>
        <meta
          name="description"
          content="Get a free estimate for your home or business with ecoWaveUS. We offer solar panels, heat pumps, EV chargers, and energy storage solutions. Call 978-500-4081 to get started!"
        />
      </Helmet>
      <FreeEstimateHero />
      <FreeEstimateAdvantage />
      <FreeEstimateSavings />
      <FreeEstimateFinancing />
      <FreeEstimateWhyChoose />
      <FreeEstimateHowWorks />
      <FreeEstimateMoreSolutions />
      <FreeEstimateReviews />
      <FreeEstimateContact />
      <FreeEstimateServiceArea />
    </>
  );
};
