import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomPage/Home.tsx";

import Layout from "./layout/index.tsx";
import No from "./pages/Contact/Contact.tsx";
import Yes from "./pages/BlogDetail/BlogDetail.tsx";
import Photo from "./pages/Write/Write.tsx";
import Message from "./pages/Message/Message.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "photo", element: <Photo /> },
      { path: "no", element: <No /> },
      { path: "yes", element: <Yes /> },
      { path: "message", element: <Message /> },
    ],
  },
]);

function App() {
  return (
    <div className="h-full  bg-[#FEFEFE]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
