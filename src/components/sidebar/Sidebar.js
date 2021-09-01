import './sidebar.css'
import {RssFeed, Event,HelpOutline,WorkOutline,School } from '@material-ui/icons'


function Sidebar() {
  return(

    <div className="side">

    <div className="sidebarWrapper">
    <ul className="sidebarList">

    <li className="sidebarlistItem">
     < RssFeed className="sidebarIcon" />
     <span className="iconText"> Feed </span>
      </li>



      <li className="sidebarlistItem">
     < School className="sidebarIcon" />
     <span className="iconText"> Courses</span>
      </li>


     

      <li className="sidebarlistItem">
     < WorkOutline className="sidebarIcon" />
     <span className="iconText"> Jobs </span>
      </li>

      <li className="sidebarlistItem">
     < Event className="sidebarIcon" />
     <span className="iconText"> Event </span>
      </li>

       <li className="sidebarlistItem">
     < HelpOutline className="sidebarIcon" />
     <span className="iconText"> Questions </span>
      </li>


    </ul>

    <button className="sideButton"> more </button>
    <hr className="sideHr" />

    <ul className="sideFriendList">
    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    <li className="sidebarFriend">

    <img src="/assets/person/8.jpg" className="friendImg" />
    <span className="friendName" > Ian </span>

    </li>

    </ul>



    </div>
    </div>

    )
}

export default Sidebar