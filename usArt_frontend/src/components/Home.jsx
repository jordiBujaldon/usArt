import './landingPage.css'
import { BsSearch } from "react-icons/bs";

const Home = () => {
    return (
      <div name='home' > 
          <div class="d-flex align-items-center justify-content-center landName row"> 
          <div class="col-sm"></div>
          <div class="col-sm">
            <div class="row">
              <div class = "col-sm">
              </div>
              <div class = "col-sm custom-margin">
                    <h1 class="w-75 pb-4">Art is not what you see, but what you make <i> others </i> see.</h1>
                      <div class="bg-white rounded shadow">              
                        <form action=""/>
                          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                            <div class="input-group">
                              <input type="search" placeholder="Try: Dragon ball drawings" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
                              <div class="input-group-append">
                                <button id="button-addon1" type="submit" class="btn btn-link text-primary"> <BsSearch/>  </button>
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