import "react-datepicker/dist/react-datepicker.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/routes";

function App() {
  return (
    <>
    {/*Session 3 => 16 : 00*/}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
