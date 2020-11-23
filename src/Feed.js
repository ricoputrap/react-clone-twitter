import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox.js'
import Post from './Post.js'
import './Feed.css'
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        /**
         * `posts` is a collection in our db
         * `doc` is each document (or post) from `posts` collection
         * `doc.data()` is the data (displayName, etc) of `doc`
         */
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            <TweetBox />

            {posts.map(post => (
                <Post
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image} />
            ))}

            {/* <Post
                displayName="Rico Putra"
                username="@rico_rpp21"
                verified
                text="TEST YOOO it's working!"
                avatar="/static/hilih.png"
                image="https://media.giphy.com/media/fuJjrm6Cv2onpmpPEK/giphy.gif" /> */}
            {/* <Post />
            <Post />
            <Post /> */}
        </div>
    )
}

export default Feed
