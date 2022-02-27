

const PostList = (post) => {

if( post.label == 'y'){
    return(`
            <div class = "wd-largeContainer">
                <div class = "wd-avatarElement">
                    <img src=${post.avatar} class="wd-avatar" />
                </div>
                <div class = "wd-contentBlock">

                    <div class="wd-smallContainer ">
                            <div class = "wd-author d-inline">${post.userName}</div>
                            <div class="wd-handle2 d-inline">${post.handle}</div>
                            <div class="wd-date d-inline">${post.time}</div>
                            <div class="wd-rightDots d-inline"><i class="fa fa-ellipsis-h"></i></div>
                    </div>



                    <div class = "wd-text">
                        ${post.title}
                    </div>

                    <div class = "wd-line1">
                        <img src=${post.image} class="wd-bigImage" />
                    </div>

                    <div class = "wd-line2">
                        <div class="wd-boldTitle">${post.caption}</div>
                        <div class="wd-imageText">
                            ${post.content}
                        </div>
                        <div class="wd-external">
                            <i class="fa fa-link"> ${post.link} </i>
                        </div>

                    </div>


                    <div class ="wd-icons">
                        <a href="#" class = "wd-first"> <i class="fa fa-comment"></i></a>
                        <div class = "wd-first2"> ${post.bubble}</div>
                        <a href="#" class = "wd-second"> <i class="fa fa-retweet"></i></a>
                        <div class = "wd-second2">${post.arrows}</div>
                        <a href="#" class = "wd-third"> <i class="fa fa-heart"></i></a>
                        <div class = "wd-third2">${post.heart}</div>
                        <a href="#" class = "wd-fourth"> <i class="fa fa-upload"></i></a>


                    </div>
                </div>
            </div>


    `);

    }if( post.label == 'n'){

    return(`
                <div class = "wd-largeContainer">
                    <div class = "wd-avatarElement">
                        <img src=${post.avatar} class="wd-avatar" />
                    </div>
                    <div class = "wd-contentBlock">
                        <div class="wd-smallContainer ">
                                <div class = "wd-author d-inline">${post.userName}</div>
                                <div class="wd-handle2 d-inline">${post.handle}</div>
                                <div class="wd-date d-inline">${post.time}</div>
                                <div class="wd-rightDots d-inline"><i class="fa fa-ellipsis-h"></i></div>
                        </div>


                        <div class = "wd-text">
                            ${post.title}
                        </div>

                        <div class = "wd-line1">
                            <img src=${post.image} class="wd-bigImage2" />
                        </div>




                        <div class ="wd-icons">
                            <a href="#" class = "wd-first"> <i class="fa fa-comment"></i></a>
                            <div class = "wd-first2"> ${post.bubble}</div>
                            <a href="#" class = "wd-second"> <i class="fa fa-retweet"></i></a>
                            <div class = "wd-second2">${post.arrows}</div>
                            <a href="#" class = "wd-third"> <i class="fa fa-heart"></i></a>
                            <div class = "wd-third2">${post.heart}</div>
                            <a href="#" class = "wd-fourth"> <i class="fa fa-upload"></i></a>

                        </div>


                    </div>
                </div>


        `);








}
}
export default PostList;
