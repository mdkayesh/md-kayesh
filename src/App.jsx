import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import {
  About,
  Contact,
  Footer,
  Projects,
  Services,
  Skills,
  Testimonial,
} from "./components";
import Loading from "./components/Loading";
import StarsCanvas from "./components/Contact/StarCanvas";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <>
              <Loading />
              <Hero />
              <About />
              <Services />
              <Skills />
              <Projects />
              <Testimonial />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
                <Footer />
              </div>
            </>
          }
        ></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
