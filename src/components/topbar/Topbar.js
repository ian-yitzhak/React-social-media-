import './topbar.css'
import {Search ,Person, Chat,Notifications } from '@material-ui/icons'
function Topbar() {
  return (
    
   <div className = "topbarContainer"> 

    <div className = "topbarLeft"> <span className="logo"> IAN </span> </div>

      <div className = "topbarCenter"> 
      <div className = "searchBar"> <Search /> 
      <input placeholder="search for post" className="search" />

      </div>
       </div>

      <div className = "topbarRight">

       <div className = "topbarLinks">
       <span className="topbarLink"> HOME </span> 
       <span className="topbarLink"> TIMELINE </span> 


       </div>

       <div className = "topbarIcons">
       <div className = "topbarIconItem">
       <Person />
       <span className="topbarIconBadge"> 1 </span> 
       </div>

       <div className = "topbarIconItem">
       <Chat />
       <span className="topbarIconBadge"> 1 </span> 
       </div>

       <div className = "topbarIconItem">
       <Notifications />
       <span className="topbarIconBadge"> 1 </span> 
       </div>
       </div>

       <img src="/assets/person/9.jpg" alt="" className="topbarImg" />



       </div>
    </div>
  );
}

export default Topbar;