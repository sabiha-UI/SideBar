import { useState } from 'react';
function Submenu(props) {
    console.log(props,"props");
    const [showMenu, toggleShowMenu] = useState(false);
    return(<div>
          <div onClick={() => toggleShowMenu(!showMenu)}>{props.data.subMenus && (showMenu?<span>&#9660;</span>:<span>&#9654;</span>)} { <a href={"http://"+props.data.urlString}>{props.data.name}</a>}</div>
              {showMenu && props.data.subMenus && props.data.subMenus.map(submenu =>{
                  return (<div><a href={"http://"+submenu.urlString}>{submenu.name}</a></div>)
              })}
    </div>);
  }

  
  export default Submenu;