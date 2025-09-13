import Navbar from "../../components/navbar/Navbar";
import styles from "../../pages/home/Home.module.css";
import Article from "../../components/article/Article";
function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Navbar title="کیا بلاگ" />
      <div className="container">
        <h2>مقالات جدید</h2>
        <div className={styles.articles}>
          <Article />
          <Article />
          <Article />
          <Article />
            <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Home;
