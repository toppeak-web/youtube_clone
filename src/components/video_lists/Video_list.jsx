import React from 'react';
import VideoItem from '../video_ltems/Video_ltem';

const Videolist = ( {videos, onVideoClick} ) => (
            <ul>
                {videos.map(video => <VideoItem
                 key={video.id}
                 video={video}
                 onVideoClick={onVideoClick}
                //  display={display}
                 />
                 )}
            </ul>
    );

export default Videolist;