import React ,{ useState} from 'react';
import Header from './Component/Header' ;
import SidePanel from './Component/SidePanel';
import Profile from './Component/Profile' ;
import Top from './Component/Top' ;
import Middle from './Component/Middle' ;
import Bottom from './Component/Bottom' ;

const App = ()=>  {

  const [menu, setMenu] = useState(false) ;

  return (
    <div className="App">
    <Header menu={menu} setMenu={setMenu} />    
    <SidePanel menu={menu} setMenu={setMenu} />
    <Profile />
    <Bottom />
    <Middle />
    <Top />
    </div>
  );
}

export default App;
