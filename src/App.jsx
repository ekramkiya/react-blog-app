import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/articlesPage/ArticlePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />

      </Routes>
    </div>
  );
}

export default App;
