

const WhoToFollowListItem = ({
                                     who = {
                                         key: '1',
                                         avatarIcon: './nasa.png',
                                         userName: 'NASA',
                                         handle: 'NASA',
                                     }}
) => {
    return(
    <>

            <div className = "wd-followBox px-2 pt-2 bp-2">
                <div className = "wd-followBoxLeft">
                    <img src={who.avatarIcon} className="wd-avatar" />
                </div>
                <div className = "wd-followBoxCenter position-relative">
                    <div className = "wd-name2">{who.userName}  <i className="fa fa-check-circle "></i> </div>
                    <div className = "wd-handle">@{who.handle}</div>
                </div>
                <div className = "wd-followBoxRight position-relative">
                    <button type="button" className ="btn btn-primary rounded-pill "> <b>Follow</b> </button>
                </div>

            </div>




    </>
    );
}


export default WhoToFollowListItem;