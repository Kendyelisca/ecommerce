import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../views/Home';
import Login from '../views/Login';
import Purchase from '../views/Purchase';
import ProductDetail from '../views/ProductDetail';
import NotFound from '../views/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';
import { loaderHome } from './loaders/loaderHome';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home />, loader: loaderHome },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/purchases',
        element: (
          <ProtectedRoute>
            <Purchase />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
