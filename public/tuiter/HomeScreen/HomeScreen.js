import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import HomeComponent from "./HomeComponent.js";
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-3  d-lg-block wd-center">
                ${HomeComponent()}
            </div>
            <div class="col-4 d-xs-none d-sm-none d-md-none d-lg-none d-xl-block wd-rightSidebar ">
                 ${PostSummaryList()}
            </div>
        </div>
    `);
})($);