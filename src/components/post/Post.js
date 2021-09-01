import './post.css'
import {MoreVert } from '@material-ui/icons'
function Post() {
  return(

     <div className="post">

       <div className="postWrapper">

         <div className="postTop"> 
         <div className="postTopLeft"> 
         <img src="/assets/person/2.jpg" className="postImg" />
         <span className="postuserName"> Ian </span>
         <span className="postDate"> 5 min agon </span>
            </div>

            <div className="postRight">  
            < MoreVert />

              </div>

            </div>


         <div className="postCenter">  

         <span className="postText"> Hey my fisrt post </span>
         <img src="/assets/post/1.jpeg" className="postImage" />

           </div>

         <div className="postBottom"> 

         <div className="postBottomLeft"> 
         <img className="likeIcon" src = "/assets/like.png" />
         <span className="postLikeCounter"> 32 people liked </span>

           </div>

           <div className="postRight"> <span className="commentText" > 9 comments </span>   </div>

            </div>

   


    </div>
    </div>

    )
}

export default Post;