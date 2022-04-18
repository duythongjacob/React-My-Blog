import "./topBar.scss"
import { Link } from "react-router-dom"
export default function TopBar() {
  const currentUser = false
  return (
    <div className='top'>
      <div className="topLeft">
       <i className="topIcon fab fa-facebook-square"></i>
       <i className="topIcon fab fa-twitter-square"></i>
       <i className="topIcon fab fa-pinterest-square"></i>
       <i className="topIcon fab fa-instagram-square"></i>
       </div>
      <div className="topCenter">
      <ul className="topList">
            <li className="topListItem"><Link className="link"  to="/" >HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/" >ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
            <li className="topListItem">
              {currentUser && "LOGOUT"}
            </li>
      </ul>   
      </div>
   
      <div className="topRight">
      {
         currentUser ?(   <img 
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" />) : ( 
              <>
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login"> LOGIN </Link> 
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register"> REGISTER </Link> 
                </li>
              </ul>
              </>
            )
      }
   
      <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
