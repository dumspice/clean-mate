import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const path = route.path;

            let Layout = DefaultLayout;

            return (
              <Route
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                path={path}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
