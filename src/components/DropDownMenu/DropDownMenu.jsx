import Style from "../DropDownMenu/DropDownMenu.module.css";
import Menu from "../Menu/Menu";

function DropDownMenu(props) {
  return (
   <div onClick={() =>{
    props.setMenuDropDownOpen(false)
   }} className={Style.wrap}>
      
     <div onClick={((event) =>{
      event.stopPropagation()
     })} className={`${Style.DropDownMenu}`}>
      
      <Menu />
    </div>
   </div>
  );
}

export default DropDownMenu;
