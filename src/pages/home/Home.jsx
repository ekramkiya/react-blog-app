import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Spinner from "../../components/spinner/Spinner";
import styles from "../../pages/home/Home.module.css";
import Article from "../../components/article/Article";
import axios from "axios";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Home() {
  // why use from state ?
  // becuse when change is occur rerender is preform
  // useEffect run after 1st rendering and creating dom and display the ui
  // after useEffect setState preform

  const [articles, setarticles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setarticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <Navbar title="کیا بلاگ" />
    
      <div className="container">
        <h2>مقالات جدید</h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styles.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
