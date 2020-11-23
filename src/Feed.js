import React from 'react'
import TweetBox from './TweetBox.js'
import Post from './Post.js'
import './Feed.css'


function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            <TweetBox />

            <Post
                displayName="Rico Putra"
                username="@rico_rpp21"
                verified
                text="TEST YOOO it's working!"
                avatar="/static/hilih.png"
                image="https://media.giphy.com/media/fuJjrm6Cv2onpmpPEK/giphy.gif" />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
