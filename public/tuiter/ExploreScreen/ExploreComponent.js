

//this section is entire explore screen. Define search bar, navbar,
//image and then call the list

    //some sizing issues to fix with this, also need to mess with colors
import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
    return(`

            <div class="wd-searchContainer pb-1 ">
                <div class="form-group has-search mx-2 ">
                    <span class="fa fa-search form-control-feedback wd-search"></span>
                    <a href="explore-settings.html" class = "wd-gear pt-1"> <i class="fa fa-cog fa-2x"></i> </a>
                    <input type="text" class="form-control" placeholder="Search Tuiter">

                </div>

            </div>

            <nav class="navbar navbar-expand-lg navbar-dark  wd-navbar wd-navbarContainer pb-3">
                <ul class="nav nav-tabs wd-navColor wd-navLimit">
                    <li class="nav-item  wd-navbar-active mx-auto">
                        <a class="nav-link  " href="#"> For You </a>
                    </li>
                    <li class="nav-item mx-auto" >
                        <a class="nav-link " href="#">Trending</a>
                    </li>
                    <li class="nav-item mx-auto">
                        <a class="nav-link " href="#">News</a>
                    </li>
                    <li class="nav-item mx-auto">
                        <a class="nav-link " href="#">Sports</a>
                    </li>
                    <li class="nav-item wd-navlinks2 mx-auto">
                        <a class="nav-link " href="#">Entertainment</a>
                        </li>

                </ul>

             </nav>


            <div class="wd-bigImageContainer  position-relative">
                        <img src="../starship.jpg" class="wd-bigImage " />
                        <div class="wd-bottomText position-absolute ">SpaceX's Starship</div>
            </div>


        <div class="pt-2">
           ${PostSummaryList()}
        </div>

    `);
}

export default ExploreComponent;