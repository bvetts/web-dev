//From index.js, import a file called who.js that exports an array as shown above.
//The array declares objects representing the suggested people to follow. Also import WhoToFollowListItem.js.
//The WhoToFollowList function should iterate over the who array and use the function WhoToFollowListItem to generate the list shown above.
//Feel free to re-use the HTML and CSS code you wrote for previous assignments.
//Refresh render.html and confirm that both the left and right sidebars render as shown.
//You might need to comment/uncomment some components and remove some of your own styling. Here's an example on how to get started with the index.js file.


const who = (todo) => {
    return(`
            <div class = "wd-followBox px-2 pt-2 bp-2">
                <div class = "wd-followBoxLeft">
                    <img src=${todo.avatarIcon} class="wd-avatar" />
                </div>
                <div class = "wd-followBoxCenter position-relative">
                    <div class = "wd-name2">${todo.userName}  <i class="fa fa-check-circle "></i> </div>
                    <div class = "wd-handle">${todo.handle}</div>
                </div>
                <div class = "wd-followBoxRight position-relative">
                    <button type="button" class="btn btn-primary rounded-pill "> <b>Follow</b> </button>
                </div>

            </div>





    `);
}


export default who;