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
                        <div class="input-group rounded">
                        <input type="search" class="form-control " placeholder="Search" aria-label="Search" aria-describedby="search-addon"  />
                        <span class="input-group-text border-0 pl-3" id="search-addon">
                        <BsSearch/>
                        </span>
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