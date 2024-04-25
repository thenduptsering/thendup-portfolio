import ReactDOM from 'react-dom/client';

import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import App from './App.jsx';

import Tiles from './components/Tiles.jsx';
import './styles/_index.scss';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="click-tiles" element={<Tiles />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
