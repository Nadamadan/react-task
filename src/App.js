import './App.css';
import {Header,Post,SideMenu} from './component';
function App() {
  return (
    <div className="App">
     <Header/>
     <div style={{ display:"flex", justifyContent:"center"}}>
     <div style={{ display:"flex", width:"60%"}}>
     <div style={{width:"60%"}}>
    <Post num="20" title="Tarmez Academy"/>
    <Post title="Hello World"/>
    <Post title="Post3"/>
   
   </div>
   <div style={{width:"40%"}} >
    <SideMenu/>
   </div>
     </div>
     </div>

    </div>
  );
}

export default App;
