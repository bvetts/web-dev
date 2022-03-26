//this page needs a ton of work
import Verified from "./verified-tuit.js";


const TuitListItem = ({
                                     tuit = {
                                         key: '2578785',
                                         avatar: "./nodejs.jpg"

                                     }}
) => {
    return(
    <>

        <div className = "wd-largeContainer">
            <div className = "wd-avatarElement">
                <img src={tuit.avatar} className="wd-avatar" />
            </div>
            <div className = "wd-contentBlock">

                <div className="wd-smallContainer ">
                        <div className = "wd-author d-inline">{tuit.postedBy.username}</div>
                        <Verified ver={tuit.verified}/>
                        <div className="wd-handle2 d-inline"> @{tuit.handle}</div>
                        <div className="wd-date d-inline">{tuit.time}</div>

                </div>



                <div className = "wd-text pb-2">
                    <div
                      dangerouslySetInnerHTML={{__html: tuit.title}}
                    />

                </div>



                <div className={tuit.attachments.videoClass}>
                    <iframe className="wd-attachments2"  src={`https://www.youtube.com/embed/${tuit.attachments.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>

                <div className = {tuit.attachments.imageClass}>
                    <img src={tuit.attachments.image} className="wd-attachments" />
                </div>



                <div >

                    <div className="wd-imageText">
                        {tuit.tuit}
                    </div>


                </div>



            </div>
        </div>




    </>
    );
}


export default TuitListItem;