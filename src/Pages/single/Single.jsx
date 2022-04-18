import "./single.scss"
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";
const Single = () => {
    return (
        <div className="single">
            <SinglePost></SinglePost>
            <SideBar></SideBar>
        </div>
    );
}

export default Single;
