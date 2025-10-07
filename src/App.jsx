import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/articlesPage/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />

      </Routes>
    </div>
  );
}

export default App;
