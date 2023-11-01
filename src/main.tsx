import { createRoot } from 'react-dom/client'
// import {
//   RouterProvider,
//   createBrowserRouter,
//   Outlet,
// } from 'react-router-dom'
// import { HomePage } from './routes/HomePage.tsx'
// import { AboutAsPage } from './routes/AboutAsPage.tsx'
// import { ContactPage } from './routes/ContactPage.tsx'
// import { HeatPumsPage } from './routes/HeatPumsPage.tsx'
// import { EvChargersPage } from './routes/EvChargersPage.tsx'
// import { ServicesPage } from './routes/ServicesPage.tsx'
// import { EnergyStoragePage } from "./routes/EnergyStoragePage.tsx"
// import { ReviewPage } from './routes/ReviewsPage.tsx'
// import { ProjectsPage } from './routes/ProjectsPage.tsx'
// import { Header } from './components/header/Header.tsx'
import './index.css'
// import { Footer } from './components/footer/Footer.tsx'
import React from 'react'
import App from './App.tsx'

// const AppLayout = () => (
//   <>
//     <Header />
//      <Outlet />
//     <Footer />
//   </>
// )
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route element={<AppLayout />}>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/about-us" element={<AboutAsPage />} />
//     <Route path="/contact-us" element={<ContactPage />} />
//     <Route path="/services" element={<ServicesPage />} />
//     <Route path="/heat-pumps" element={<HeatPumsPage />} />
//     <Route path="/ev-chargers" element={<EvChargersPage />} />
//     <Route path="/energy-storage" element={<EnergyStoragePage />} />
//   </Route>
// ))
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
//         children: [
//           {
//             path: 'reviews',
//             element: <ReviewPage />,

//           },
//           {
//             path: 'projects',
//             element: <ProjectsPage />,
//           }
//         ],
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
//       }
//     ],
//   },
//   ]);

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)


//contact us, cambiar la direccion a 22 brodway st
//- en el main page me gustaria sacar las lines divisoras negras
//-Main page , brand we trust, agregar, Daikin, tesla, enphase, encharge, juicebox

// Heat pump page, centrat texto en imagen, sacra lineas divisoras, poner texto para frase después del titulo como la de ev chargers,juntar logos, cambiar step by step a " Installation process step by step, agregar Daikin a las marcas, agregar espacio entre el titulo incentives and..... y la imagen, agrandar la letra
//horarios..... 978 500 4081  BOTON