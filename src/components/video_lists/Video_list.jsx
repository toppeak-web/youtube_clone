import React from 'react';
import VideoItem from '../video_ltems/Video_ltem';

const Videolist = (props) => (
            <ul>
                {props.videos.map(video => <VideoItem
                 key={video.id}
                 video={video}></VideoItem>)}
            </ul>
    );

export default Videolist;