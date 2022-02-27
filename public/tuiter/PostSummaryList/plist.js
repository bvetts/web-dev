

const plist = (item) => {


    return(`
            <div class = "wd-container1 pt-2">
                <div class = "wd-leftElement1 mx-auto">
                    <div  class="wd-topics pb-2">${item.topic}</div>
                    <div class="wd-name pr-1">${item.userName} <i class="fa fa-check-circle  "></i> <span class="wd-timestamp"> ${item.time} </span></div>

                    <div class="wd-title pt-1 position-relative">${item.title} </div>
                    <div  class="wd-tuitsCount pb-3 pt-2">${item.tweets} </div>


                </div>
                <div class = "wd-rightElement1 pt-2 mx-auto">

                    <img src=${item.image} class="wd-right_image" "/>
                </div>
            </div>


    `);
}
export default plist;


