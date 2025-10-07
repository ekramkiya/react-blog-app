import styled from "./navbar.module.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>

          <ul>
            <Link to={'/'}>لیست مقالات</Link>
          
            <Link to={'/about'}>درباره</Link>
            <Link to={'/create-article'}>ایجاد مقاله</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
