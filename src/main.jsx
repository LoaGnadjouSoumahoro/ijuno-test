import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import App from './App'; // Assurez-vous que le chemin est correct
// import Layout from './Layout';
// import HomePage from './pages/HomePage/HomePage';
// import Pricing from './pages/pricing/Pricing';
// import Resources from './pages/Resources/Resources';
// import AboutUs from './pages/AboutUS/AboutUs';
// import CookiePage from './pages/cookiePage/CookiePage';
// // Assurez-vous que le chemin est correct
// import './index.css';
// import CookieBanner from './ui/feedback/cookie/CookieBanner';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route index element={<HomePage />} />
//       <Route path='pricing' element={<Pricing />} />
//       <Route path='resources' element={<Resources />} />
//       <Route path='aboutUs' element={<AboutUs />} />
//       <Route path='cookies' element={<CookiePage />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <App />
//       <CookieBanner /> {/* Assurez-vous de rendre le CookieBanner à l'intérieur de RouterProvider */}
//     </RouterProvider>
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import HomePage from './pages/HomePage/HomePage.jsx';
// import Pricing from './pages/pricing/Pricing.jsx';
// import Resources from './pages/Resources/Resources.jsx';
// import AboutUs from './pages/AboutUS/AboutUs.jsx';
// import CookiePage from './pages/cookiePage/CookiePage.jsx';
// import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<HomePage />}>
//         {/* <Route path=':id' element={<FeaturesSection />} /> */}
//       </Route>
//       <Route path='pricing' element={<Pricing />} />
//       <Route path='resources' element={<Resources />} />
//       <Route path='aboutUs' element={<AboutUs />} />
//       <Route path='cookies' element={<CookiePage />} />
//     </Route>
//      <Route path='*' element={<ErrorPage />} />
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
