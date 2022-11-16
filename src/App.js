import "./App.css";
import FullLayout from "./layout/full-layout/FullLayout";
import Contact from "./features/frontend/contact/Contact";
import About from "./features/frontend/about/About";
import ImageGallary from "./features/frontend/image-gallery/ImageGallery";

function App() {
  return (
    <>
      {/* <FullLayout /> */}
      <About />
      {/* <ImageGallary /> */}
      <Contact />
    </>
  );
}

export default App;
