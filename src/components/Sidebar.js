import './Sidemenu.css';
import Submenu from './Submenu';
function Sidebar(props) {
  console.log(props,"props")
  const styles = {
      width: props.width,
      backgroundColor:props.backgroundColor,
      color:'white'
  }
  return(<div style={styles} data-testid="side-bar">
    {props.data.map(submenuItem => {
       return <Submenu key={submenuItem.menuId} data-testid="submenu-item" data={submenuItem}/>
    })}
  </div>);
}

export default Sidebar;