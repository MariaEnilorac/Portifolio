import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import "./styles/components/app.sass";

const Layout = () => (
  <div id="portifolio">
    <h1>Maria Caroline</h1>
    <Sidebar />
    <div className="content">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainContent /> },
      { path: "/projetos", element: <ProjectsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
