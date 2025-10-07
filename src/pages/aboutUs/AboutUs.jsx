import styled from "./aboutUs.module.css";
import Navbar from "../../components/navbar/Navbar";
import about from "../../assets/images/aboutus.jpg";
import Footer from "../../components/footer/footer";
function AboutUs() {
  return (
    <div className={styled.about}>
      <Navbar title="کیا بلاگ" />
     <div className="container">
         <h2>درباره ما</h2>
      <p>
        در تخصیص منابع پویا و مدیریت انرژی در مرکز داده مجازی با بارکاری متنوع
        در طول زمان و کاربردیهای مختلف بررسی شده است. راهكاری پیشنهادی از
        اطلاعات صفبندی موجود در سیستم برای تصمیمات کنترلی آنلاین استفاده می کند.
        و تكنیک توسعه یافتهی جهت کنترل پذیرش، مسیریابی وتخصیص منابع
        استفاده می شود. این الگوریتم میانگین گذردهی را حداکثر کرده و برای
        تغییرات غیر قابل پیش بینی بارکاری مناسب است و نیاز به تحیلیلهای آماری
        ندارد. هدف اصلی در طراحی سیاست کنترل انلاین حداکثر کردن مجموع بهرهوری
        برنامه های کاربردی و کم کردن هزینههای انرژی سرورها است
      </p>
      <h3>فعالیت های ما</h3>
      <img src={about} alt="about" />
     </div>
     <Footer />
    </div>
  );
}

export default AboutUs;
