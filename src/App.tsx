import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "./utils/RouterProvider";

function App() {
  return (
    // We wrap the RouterProvider with the BrowserRouter
    // RouterProvider is a custom component that we created to handle the routes
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  );
}

export default App;
