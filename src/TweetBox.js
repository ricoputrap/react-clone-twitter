import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Putra Rico',
            username: "putrarico",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
                "https://robohash.org/014795ea1a3b5c7fd6be33b2578a2c5b?set=set4&bgset=&size=400x400",
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="/static/hilih.png" />
                    <input 
                        value={ tweetMessage }
                        onChange={ e => setTweetMessage(e.target.value) }
                        placeholder="What's happening?" 
                        type="text" />
                </div>
                <input 
                    value={ tweetImage }
                    onChange={ e => setTweetImage(e.target.value) }
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" 
                    type="text" />
                <Button
                    onClick={ sendTweet }
                    className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
