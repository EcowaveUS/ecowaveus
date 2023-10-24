import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom'
import { HomePage } from './routes/HomePage.tsx'
import { AboutAsPage } from './routes/AboutAsPage.tsx'
import { ContactPage } from './routes/ContactPage.tsx'
import { HeatPumsPage } from './routes/HeatPumsPage.tsx'
import { EvChargersPage } from './routes/EvChargersPage.tsx'
import { ServicesPage } from './routes/ServicesPage.tsx'
import { EnergyStoragePage } from "./routes/EnergyStoragePage.tsx"
import { Header } from './components/header/Header.tsx'
import './index.css'
import { Footer } from './components/footer/Footer.tsx'

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)
const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/about-us" element={<AboutAsPage />} />
    <Route path="/contact-us" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/heat-pumps" element={<HeatPumsPage />} />
    <Route path="/ev-chargers" element={<EvChargersPage />} />
    <Route path="/energy-storage" element={<EnergyStoragePage />} />
  </Route>
))
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [

//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: '/about-us',
//         element: <AboutAsPage />,
//       },
//       {
//         path: '/contact-us',
//         element: <ContactPage />,
//       },
//       {
//         path: '/services',
//         element: <ServicesPage />,
//       },
//       {
//         path: '/heat-pumps',
//         element: <HeatPumsPage />,
//       },
//       {
//         path: '/ev-chargers',
//         element: <EvChargersPage />,
//       },
//       {
//         path: '/energy-storage',
//         element: <EnergyStoragePage />,
//       },
//     ],
//   },
//   ]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
