const NavigationSidebar = (active) => {

    if( active == 'explore'){
    return(`


            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                    <a class="list-group-item " href="../HomeScreen/home.html">
                            <i class="fa fa-home"> <span class="wd-navLabels" /> Home<span> </i></a>
                    <a class="list-group-item wd-navbar-active" href="../ExploreScreen/explore.html">
                            <i class="fa fa-hashtag"> <span class="wd-navLabels" /> Explore<span> </i></a>
                    <a class="list-group-item" href="/">
                            <i class="fa fa-bell"> <span class="wd-navLabels" /> Notifications<span> </i></a>
                    <a class="list-group-item" href="/">
                            <i class="fa fa-envelope"> <span class="wd-navLabels" /> Messages<span> </i></a>
                    <a class="list-group-item" href="/">
                            <i class="fa fa-bookmark"> <span class="wd-navLabels" /> Bookmarks<span> </i></a>
                    <a class="list-group-item" href="/">
                            <i class="fa fa-list"> <span class="wd-navLabels" /> Lists<span> </i></a>
                    <a class="list-group-item" href="/">
                            <i class="fa fa-user"><span class="wd-navLabels" /> Profile<span>  </i></a>
                    <a class="list-group-item" href="/">
                            <i class="fa fa-circle"> <span class="wd-navLabels" /> More<span> </i></a>



            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
    }else {
    return(`


                <div class="list-group">
                    <a class="list-group-item" href="/">
                        <i class="fab fa-twitter"></i></a>
                <!-- continue the rest of the list -->
                        <a class="list-group-item wd-navbar-active " href="../HomeScreen/home.html">
                                <i class="fa fa-home"> <span class="wd-navLabels" /> Home<span> </i></a>
                        <a class="list-group-item " href="../ExploreScreen/explore.html">
                                <i class="fa fa-hashtag"> <span class="wd-navLabels" /> Explore<span> </i></a>
                        <a class="list-group-item" href="/">
                                <i class="fa fa-bell"> <span class="wd-navLabels" /> Notifications<span> </i></a>
                        <a class="list-group-item" href="/">
                                <i class="fa fa-envelope"> <span class="wd-navLabels" /> Messages<span> </i></a>
                        <a class="list-group-item" href="/">
                                <i class="fa fa-bookmark"> <span class="wd-navLabels" /> Bookmarks<span> </i></a>
                        <a class="list-group-item" href="/">
                                <i class="fa fa-list"> <span class="wd-navLabels" /> Lists<span> </i></a>
                        <a class="list-group-item" href="/">
                                <i class="fa fa-user"><span class="wd-navLabels" /> Profile<span>  </i></a>
                        <a class="list-group-item" href="/">
                                <i class="fa fa-circle"> <span class="wd-navLabels" /> More<span> </i></a>



                </div>
                <div class="d-grid mt-2">
                    <a href="tweet.html"
                       class="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
        `);


    }


}
export default NavigationSidebar;
