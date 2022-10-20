import './landingPage.css'
import { BsSearch } from "react-icons/bs";

const Home = () => {
    return (
      <div name='home'> 
          <div class="d-flex align-items-center justify-content-center landName row"> 
          <div class="col-sm"></div>
          <div class="col-sm">
            <div class="row">
              <div class = "col-sm">
              </div>
              <div class = "col-sm">
                    <h1 class="w-75 pb-4">Art is not what you see, but what you make <i> others </i> see.</h1>
                      <div class="container justify-content-center">
                            <div class="row">
                              <div class="col-md-8">                             
                                <div class="input-group mb-3">
                                <input type="text" class="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div class="input-group-append">
                                  <button class="btn btn-outline-warning btn-lg" type="button"><i class="fa fa-search"></i></button>
                                </div>
                              </div>                         
                              </div>                              
                            </div>                                                        
                      </div>
                  <div class="flex my-4 row">
                    <div class="col-2">
                    <p style={{color:"white"}}><strong> Popular: </strong></p>

                    </div>
                    <div class="col-lg landingTags">
                        <span class="landingTextSpan">Disney</span>
                        <span class="landingTextSpan">Dragon Ball</span>
                        <span class="landingTextSpan">Tokyo Ghoul</span>
                    </div>
                    

                  </div>
              </div>
              <div class = "col-sm">

              </div>
            </div>
          </div>
          <div class="col-sm"></div>

          </div>
      </div>
    );
  }
  
  export default Home;