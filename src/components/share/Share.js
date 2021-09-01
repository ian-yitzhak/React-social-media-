import './share.css'
import {PermMedia , Label,Room,EmojiEmotions } from '@material-ui/icons'
function Share() {
  return(

     <div className="share">

      <div className="shareWrapper">

       <div className="shareTop">
       <img className="shareImg" src="/assets/person/3.jpg" />

       <input placeholder="whats in your mind" className="shareInput" />

        </div>
        <hr className="shareHr" />

       <div className="shareBottom"> 

       <div className="shareOptions">

        <div className="shareOption">
        <PermMedia className="shareIcon" />

        <span className="optionText"> Photo or Video </span>
       </div>



       <div className="shareOption">
        <EmojiEmotions className="shareIcon" />

        <span className="optionText"> Feeling</span>
       </div>



       <div className="shareOption">
        <Room className="shareIcon" />

        <span className="optionText"> Location </span>
       </div>

       <div className="shareOption">
        <Label className="shareIcon" />

        <span className="optionText"> Tag</span>
       </div>
       </div>

       <button className="shareButton">Share </button>

       </div>
        
    </div>

    </div>

    )
}

export default Share;