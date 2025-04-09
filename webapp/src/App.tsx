import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllIdeasRoute } from "./lib/routes";

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path="/ideas/:ideaNick" element={<ViewIdeaPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
