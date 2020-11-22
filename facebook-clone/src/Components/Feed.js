import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import './Feed.css';
import Post from './Post';



const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
              profilePic='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
              message='this is a message'
              timestamp='time'
              imgName='imgName'
              username='Alonso'
            />

            {/*
                postsData.map(entry => (
                    <Post
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                    />
                ))
            */}
        </div>
    )
}

export default Feed;
