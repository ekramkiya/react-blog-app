import styles from "./article.module.css";
import image from "./../../assets/images/js.jpeg";

function Article(props) {
   
    console.log(props);
    
  return (
     <div className={styles.articleWrapper}> 
     <img src={props.article.imageUrl} alt="Article" />
     <h3>{props.article.title}</h3>
     <p>{props.article.readingTime}</p>
    </div>
    );
}

export default Article;
