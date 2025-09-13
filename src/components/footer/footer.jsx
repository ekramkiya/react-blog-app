import styled from './footer.module.css'
function Footer(props){

  
  return(
    <div className={styled.footer}>

      <h4>{props.name}</h4>
    </div>
  )
}

export default Footer;