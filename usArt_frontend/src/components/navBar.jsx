import { Component } from "react";
import './navBar.css'


//#TODO: Poner lo de underL en la NoLogged
function NoLoggedNavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light " aria-label="Offcanvas navbar small">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home"><h1>UsArt</h1></a>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <a  class="nav-link active"  id="offcanvasNavbar2Label" href="/home"><h1>UsArt</h1> </a>
            <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" style={{zIndex:"2"}}>
                <li class="nav-item">
                  <a style={{color:"white"}} class="nav-link active" aria-current="page" href="/explore">Explore</a>
                </li>
                <li class="nav-item">
                  <a style={{color:"white"}} class="nav-link" href="/sign-in">Log in</a>
                </li>
                <li class="nav-item">
                  <a style={{color:"white"}} class="nav-link" href="/join">Join</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
function LoggedNavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light" aria-label="Offcanvas navbar small">
      <div class="container-fluid">
        <a class="navbar-brand p-4 " href="/home"><h1>UsArt</h1></a>
        <button style={{background:"white"}} class="navbar-toggler" id="button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-start text-bg-dark"  id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">UsArt</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 " style={{zIndex:"2"}}>
                <li class="nav-item px-3">
                  <a style={{color:"white"}} class="nav-link active underL px-3" aria-current="page" href="/explore">Explore</a>
                </li>
                <li class="nav-item px-3 ">
                  <a style={{color:"white"}} class="nav-link underL px-3" href="/favoritos">Favoritos</a>
                </li>
                <li class="nav-item px-3">
                  <a style={{color:"white"}} class="nav-link underL px-3" href="/buzon">Buzon</a>
                </li>
                <li class="nav-item px-3">
                  <a style={{color:"white"}} class="nav-link underL px-3" href="/perfil">Mi perfil</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default class navBar extends Component {
  constructor(props) {
    super(props);
    this.logged = props.logged;

  }
  render() {
    if(this.logged){
      return <LoggedNavBar/>
    }else{
      return <NoLoggedNavBar/>
    }
  }


}