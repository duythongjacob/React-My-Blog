import "./settings.scss"
import SideBar from "../../components/sidebar/SideBar"

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                    <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
                        <label htmlFor="fileInput">
                            <i className=" settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput"  hidden/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Jacobs" />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="jacobs@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    );
}

export default Settings;
