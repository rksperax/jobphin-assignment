import { PAGE_ROUTES } from "../constants/routes";
import Dashboard from "../containers/Dashboard";

const appRoutes = [
  {
    path: PAGE_ROUTES.root,
    element: <Dashboard />
  },
];

export default appRoutes;