import React from "react";
import './Sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
function Sidebar(){
    return(
        <div className="sidebar">

            <RssFeedIcon className="FeedIcon"/>
            
            <h4 className="Feed">Feed</h4>
            <ChatIcon className="ChatIcon"/>
            <h4 className="Chat">Chat</h4>
            <OndemandVideoIcon className="VideoIcon"/>
            <h4 className="Video">Video</h4>
            <GroupsIcon className="GroupIcon"/>
            <h4 className="Group">Group</h4>
            <BookmarkIcon className="BookmarkIcon"/>
            <h4 className="Bookmark">Bookmark</h4>
            <QuestionMarkIcon className="QuestionMarkIcon"/>
            <h4 className="Question">Questions</h4>
            <WorkIcon className="WorkIcon"/>
            <h4 className="Work">Jobs</h4>
            <EventIcon className="EventIcon"/>
            <h4 className="Event">Events</h4>
            <SchoolIcon className="CourseIcon"/>
            <h4 className="Course">Courses</h4>
            <button className="Button-side">Show More</button>
            <hr className="line"/>
            <br/>
            <br/>
            <img src="v&a.jpg" alt="profile" className="rohit" />
            <h4 className="name">Rohit Sharma</h4>
            <img src="v&a.jpg" alt="profile" className="abd" />
            <h4 className="name1">AB Devilliers</h4>



            




            

            </div>
    )
}
export default Sidebar;

