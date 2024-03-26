import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";
import AppLayout from "../components/layout/RootLayout";

const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map(({ component: Component, path }, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={
                <AppLayout>
                  
                    <Component />
                  
                </AppLayout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};
export default RoutesContainer;
