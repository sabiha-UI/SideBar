
import Sidebar from './components/Sidebar';
function App() {
  const data = [
    {
      menuId:1,
      name: "Installation",
      tooltip:null,
      urlString:"www.google.com",
      subMenus:
  [
    {
          menuId:1,
          name:"Getting started",
          tooltip:null,
          urlString:"www.google.com"
  },
  {
          menuId:2,
          name:"Adding to new website",
          tooltip:null,
          urlString:"www.google.com"
  }
  ]

  },
  {
      menuId:2,
      name:"Main Concept",
      tooltip:null,
      urlString:"www.google.com",
      subMenus:
  [
    {
          menuId:1,
          name:"JSX",
          tooltip:null,
          urlString:"www.google.com"
  },
  {
          menuId:2,
          name:"Rendering",
          tooltip:null,
          urlString:"www.google.com"
  }
  ]

  },
  {
      menuId:3,
      name:"Testing",
      tooltip:null,
      urlString:"www.google.com"
  }

 ]
  return (
    <div className="App">
       <h1>Sidebar Demo</h1>
       <Sidebar data={data} width="200" backgroundColor="#046b99" />
    </div>
  );
}

export default App;
