import "./App.css";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "./views/CollentionPage";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex justify-center">
      <div className="h-full w-[576px] bg-[#EDF1F5]">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route
            path="*"
            element={
              <p className="cursor-default py-20 text-center text-2xl">
                There's nothing here: <span className="underline">404!</span>
              </p>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
