import "./home.scss"
import Header from "../../components/header/Header"
import Posts from  "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"
export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts></Posts>
        <SideBar></SideBar>
      </div>
    </>
  
        
  )
}
