import React from "react";
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Topbar(){
    return(
        <>
        <div className="topbarWrapper">
            <h2 className="logo">facebook</h2>
            <SearchIcon className="SearchIcon"/>
            <input type="text"className="SEARCH" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for Friend Post or Video"/>
            <h5 className="Homepage">Home page</h5>
            <h5 className="Timeline">Timeline</h5>
            <PersonIcon className="personicon"/>
            <ChatBubbleOutlineIcon className="ChatBubble"/>
            <NotificationsIcon className="Notifications"/>
            <img src="v&a.jpg" alt="profile" className="profile" />

        </div>
        </>
    )   
}
export default Topbar;