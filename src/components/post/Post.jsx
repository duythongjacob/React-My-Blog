import  "./post.scss"

export default function Post() {
  return (
    <div className='post'>
       <img
        className="postImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"> Music</span>  
          <span className="postCat"> Life</span>  
         
           
        </div>
        <span className="postTitle">
          Lorem ipsum, dolor sit amet consectetu
        </span>
        <hr />
        <span className="postDate">
          1 hour a ago
        </span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis ad odit dolore nemo nostrum. Reprehenderit, et, assumenda suscipit totam fugit quidem, eligendi exercitationem praesentium debitis obcaecati fuga quasi natus!</p>
    </div>
  )
}
