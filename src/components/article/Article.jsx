import styles from "./article.module.css";
import image from "./../../assets/images/js.jpeg";

function Article() {
  return (
     <div className={styles.articleWrapper}> 
     <img src={image} alt="Article" />
     <h3>متغیر ها در جاوااسکریپت</h3>
     <p>خواندن پنج دقیقه ایی</p>
    </div>
    );
}

export default Article;
