import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './pages/AboutUS/AboutUs';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import Pricing from './pages/pricing/Pricing';
import Resources from './pages/Resources/Resources';
import Layout from './Layout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'aboutUs',
        element: <AboutUs />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
