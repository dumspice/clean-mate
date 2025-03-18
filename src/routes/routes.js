//route config
import config from "../config";

// layout NoHeader
import NonHeaderLayout from "../layout/NonHeaderLayout/NonHeaderLayout";
import FormLayout from "../layout/FormLayout/FormLayout";

//pages
import Booking from "../pages/Booking/Booking";
import History from "../pages/History/History";
import Favourite from "../pages/Favourite/Favourite";
import Notification from "../pages/Notification/Notification";
import Account from "../pages/Account/Account";
import MultiStepForm from "../pages/Booking/components/MultiStepForm/MultiStepForm";

const publicRoutes = [
  {
    path: config.routes.booking,
    component: Booking,
  },
  {
    path: config.routes.history,
    component: History,
    layout: NonHeaderLayout,
  },
  {
    path: config.routes.favourite,
    component: Favourite,
    layout: NonHeaderLayout,
  },
  {
    path: config.routes.notification,
    component: Notification,
    layout: NonHeaderLayout,
  },
  {
    path: config.routes.account,
    component: Account,
    layout: NonHeaderLayout,
  },
  {
    path: config.routes.multiStepForm,
    component: MultiStepForm,
    layout: FormLayout,
  },
]; // for those who do not need authentication
const privateRoutes = []; //for those who need authentication

export { publicRoutes, privateRoutes };
