import React from "react";
import './Centerbar.css';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Centerbar(){
    return(
        <div className="centerbar">
            <div className="top-box">
            <img src="v&a.jpg" alt="profile" className="profile-1" />
            <h5 className="h5-stmt">What's in your mind Virat?</h5>
            <hr className="hr-line"/>
            <AddToPhotosIcon className="Photo-icon"/>
            <h6 className="photovideo">Photo/Video</h6>
            <LocalOfferIcon className="tag"/>
            <h6 className="tag-name">Tag</h6>
            <AddLocationIcon className="Location-icon"/>
            <h6 className="loc-name">Location</h6>
            <EmojiEmotionsIcon className="Emotions"/>
            <h6 className="Emoji">Emotions</h6>
            <button className="button-share">Share</button>
        </div>.
        <div className="center-box">
        <img src="rohit-profile.jpg" alt="profile" className="profile-rohit" />
        <h5 className="h5-rohit">ROHIT SHARMA</h5>
        <h6 className="min"> 5 min ago </h6>
        <MoreVertIcon className="dot-icon"/>
        <h4 className="Writen">This picture epitomises how I’m feeling right now. So many words but can’t find the right ones to express what yesterday meant to me but I will, and I will share them, but right now I’m basking in a dream come true for a billion of us.
        </h4>
        <img src="rohitfb.jpg" alt="profile" className="rohitfb" />


        </div>
        <div className="right-box">
        <img src="gift_box.jpg" alt="profile" className="gift_box" />
        <h5 className="stmt1" ><b>Rohit Sharma</b> and <b>two more</b> <b>friends</b> have birthday today.</h5>

        <img src="mc_fries.jpg" alt="profile" className="mc_fries" />
            

        </div>
             

            </div>
            
        
    )
}
export default Centerbar;