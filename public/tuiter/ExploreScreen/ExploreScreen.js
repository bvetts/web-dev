import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
//will need to mess around with the bootstrap columns???
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-md-auto  d-lg-block wd-center">
                ${ExploreComponent()}
            </div>
            <div class="col d-xs-none d-sm-none d-md-none d-lg-inline-block  wd-rightSidebar">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
