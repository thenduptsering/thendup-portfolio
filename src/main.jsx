import ReactDOM from 'react-dom/client';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import App from './App.jsx';

import Tiles from './components/Tiles.jsx';
import './styles/index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="tiles" element={<Tiles />} />
{/* 
      <Route path="/search" element={<Search />}>
        <Route path="countries" element={<Countries />} />
        <Route path="products" element={<Products />} />
        <Route path="questions" element={<Questions />} />
      </Route>

      <Route path="/tutorials" element={<Tutorials />}>
        <Route path="async" element={<AsyncTutorial />} />
        <Route path="callback" element={<CallbackTutorial />} />
        <Route path="cleanup" element={<CleanupTutorial />} />
        <Route path="closure" element={<ClosureTutorial />} />
        <Route path="context" element={<ContextTutorial />} />
        <Route path="custom-hook" element={<CustomHookTutorial />} />
        <Route path="debounce-throttle" element={<DebounceThrottleTutorial />} />
        <Route path="effect" element={<EffectTutorial />} />
        <Route path="event-loop" element={<EventLoopTest />} />
        <Route path="fetch" element={<Post />} />
        <Route path="memo" element={<MemoTutorial />} />
        <Route path="reducer" element={<ReducerTutorial />} />
        <Route path="ref" element={<RefTutorial />} />
        <Route path="state" element={<StateTutorial />} />
        <Route path="type" element={<TypeTutorial />} />
      </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
