// controllers
import ControllerCode from "./controllers/Code";
import ControllerFlow from "./controllers/Flow";
import ControllerHomepage from "./controllers/Homepage";

const Routes = {
  "/": ControllerHomepage,
  ...ControllerCode,
  ...ControllerFlow,
};

export default Routes;
