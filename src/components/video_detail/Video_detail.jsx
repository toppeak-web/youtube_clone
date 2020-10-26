import React from 'react';
import styles from "./Video_detail module.css"

const VideoDetail = ({ video, video: {snippet }}) => (
    <>
        <section className={styles.detail}>
            <iframe id="ytplayer" type="text/html" width="1080" height="607.5"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0" allowfullscreen="true"/>
        </section>
        {console.log(video)}
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre>{snippet.description}</pre>
    </>
);

export default VideoDetail;