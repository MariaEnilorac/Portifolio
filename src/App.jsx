import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import "./styles/components/app.sass";

const router = createBrowserRouter([
  { path: "/", element: <MainContent /> },
  { path: "/projetos", element: <ProjectsPage /> }
]);

function App() {
  return (
    <div id="portifolio">
      <h1>Maria Caroline</h1>
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
