import React from 'react'
import './Widgets.css'
import SearchIcon from "@material-ui/icons/Search"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twiiter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1327637096060776448"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="rico_rpp21"
                    options={{ height: 400 }} />

                <TwitterShareButton
                    url={"https://web.facebook.com/rico.heicko"}
                    options={{
                        text: "TEST TEST",
                        via: "rico_rpp21"
                    }} />
            </div>
        </div>
    )
}

export default Widgets
