import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Usermanagement from './usermanagement';
import News from './news';
import CreateNews from './news/createnews';

export const routes = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/user', element: <Usermanagement /> },
  { path: '/news', element: <News /> },
  { path: '/news/create', element: <CreateNews /> },
]);
