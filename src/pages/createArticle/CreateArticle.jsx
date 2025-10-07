
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
function CreateArticle() {
  return (
    <>
    <Navbar title="کیا بلاگ" />
    <div className="container">
        
      <div className={styled.createArticlePage}>
        <h1>ایجاد مقاله</h1>

       
      </div>
    
    </div>
    {/* <Footer /> */}
    </>
    
  );
}

export default CreateArticle;
