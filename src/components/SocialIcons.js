import React from "react";
import InstagramIcon from "../svg/InstagramIcon";
import FacebookIcon from "../svg/FacebookIcon";
import YoutubeIcon from "../svg/YoutubeIcon";
import TwitterIcon from "../svg/TwitterIcon";

const SocialIcons = ({ color='#000000' }) => (

       
        <div className={'flex mt-1 p-2 mb-2 '}>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://instagram.com/unilimpio.ec" ><InstagramIcon color={color} /></a>
            </div>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://facebook.com/unilimpio" ><FacebookIcon color={color} /></a>
            </div>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://youtube.com/unilimpio.ec" ><YoutubeIcon color={color} /></a>
            </div>
            <div className={'flex-1 w-2 mx-1'}>
            <a href="https://twitter.com/unilimpio.ec" ><TwitterIcon color={color} /></a>
            </div>
        </div>


);


export default SocialIcons;