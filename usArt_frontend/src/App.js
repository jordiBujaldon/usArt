import NavBar from './components/navBar';
import video from "./assets/bgVideo.mp4"
import Home from './components/Home';
import Explorer from './components/explorer';
import "./app.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Form,
} from "react-router-dom";

function VideoBG(){
  if(window.location.href.includes('home')){
    return (<video class="video bg-dark darkTest"
    src = {video}
    autoplay="true" muted="true" loop="true"
  ></video>);
  }else{
    //document.html.style.backgroundImage = "url('assets/image1.jpg')";
  }
}

function NavbarDelete(){
  if(!window.location.href.includes('join')){
    return <NavBar logged={false} />
  }
}

function App() {
  return (
    <div class="main" id="main" >
      <VideoBG/>
      <div class="content  ">
        <NavbarDelete/>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/explore" element={<Explorer />}></Route>
          </Routes>
        </Router>
      </div>
    </div>

  );
}


export default App;
