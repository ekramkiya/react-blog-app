import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null); // Use null instead of empty array
  const [isLoading, setIsLoading] = useState(true); // Start with loading true

  useEffect(() => {
    if (!params.id) return; // Don't fetch if id is missing

    setIsLoading(true);

    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(false);
      });
  }, [params.id]); // Add dependency to ensure effect runs when id changes

  return (
    <>
      <Navbar title="کیا بلاگ" />

      <div className={styled.articlePage}>
        {isLoading ? (
          <Spinner />
        ) : article ? (
          <div className="container">
            <h1>{article.title}</h1>

            <div className={styled.articleInfo}>
              <span>تاریخ: {article.date}</span>
              <span>نویسنده: {article.author}</span>
              <span>مدت زمان خواندن: {article.readingTime}</span>
            </div>

            <img src={article.imageUrl} alt={article.title} />
            <p>{article.content}</p>
          </div>
        ) : (
          <p>مقاله‌ای یافت نشد.</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ArticlePage;
