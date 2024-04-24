import ReactDOM from 'react-dom/client';

import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import App from './App.jsx';

import QuoteTiles from './components/QuoteTiles.jsx';
import './styles/_index.scss';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="quote-tiles" element={<QuoteTiles />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
