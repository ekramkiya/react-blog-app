import axios from "axios";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import Textarea from "../../components/textarea/Textarea";
import styled from "./createArticle.module.css";
import { useState } from "react";

function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState({
    title: "",
    date: "",
    author: "",
    readingTime: "",
    message: "",
    imageUrl : "",
  });
  //   let a = {"name" : "ali", "age" : 25};
  //   let b  = {...a};
  //   console.log(b);

  const handleOnChangeArticle = (event) => {
    // setArticleTitle(event.target.value);
    // console.log(event.target.name,event.target.value);

    setArticleTitle((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeArticleMessage = (event) => {
    setArticleTitle((prevState) => ({
      ...prevState,
       message : event.target.value,
    }));
  };
 const handleNewArticle = () => {
    axios.post("http://localhost:8000/articles",{
        id : 9,
        title : articleTitle.title,
        date : articleTitle.date,
        author : articleTitle.author,
        readingTime : articleTitle.readingTime,
        content : articleTitle.message,
        imageUrl : articleTitle.imageUrl,

    })
    }


  return (
    <>
      <Navbar title="کیا بلاگ" />
      <div className="container">
        <div className={styled.createArticlePage}>
          <h1>ایجاد مقاله</h1>

          <Input
            label={":عنوان"}
            name={"title"}
            handleChange={handleOnChangeArticle}
            type="text"
          />
          <Input
            label={":تاریخ"}
            name={"date"}
            handleChange={handleOnChangeArticle}
            type="text"
          />
          <Input
            label={":نویسنده"}
            name={"author"}
            handleChange={handleOnChangeArticle}
            type="text"
          />
          <Input
            label={":مدت زمان خواندن"}
            name={"readingTime"}
            handleChange={handleOnChangeArticle}
            type="text"
          />

           <Input
            label={":آدرس تصویر"}
            name={"imageUrl"}
            handleChange={handleOnChangeArticle}
            type="text"

          />

          <Textarea label={":متن"} handleChange={handleChangeArticleMessage} />

          <div className={styled.btnWrapper}>
            <button onClick={handleNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default CreateArticle;
