import React, { memo } from 'react';
import styles from "./Video_ltem.module.css"

function VideoItems({ video , video: { snippet }, onVideoClick}) {  //props.video.snippet
    let asd = snippet.publishedAt

    // const displayType = display === "list" ? styles.list : styles.grid

    function timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
 }
   
    return (
        <>
        <p className="sub"></p>
        <div className={`${styles.ytb_ui}`} onClick={() => onVideoClick(video)}>
            <div className={styles.ui_thumb}>
                <img src={snippet.thumbnails.medium.url} alt={snippet.title} className={styles.thumb_img} />
            </div>
            <div className={styles.ui_content}>
                <div className={styles.content_title}>
                    
                    Title: {`${snippet.title.length > 45 ? snippet.title.slice(0, 45)+`...`:snippet.title}`}
                </div>
                <div className={styles.content_channel}>
                    <span className={styles.channel_name}>
                        Channel: {`${snippet.channelTitle.length > 50 ? snippet.channelTitle.substr(0, 50)+`...`:snippet.channelTitle}`} {/*  <i class={styles.fa_check_circle}></i> */}
                    </span>
                    <span className={styles.content_description} title={snippet.description}>
                    description: {`${snippet.description.length > 50 ? snippet.description.substr(0, 50)+`...`:snippet.description}`}
                    </span>
                    <span className={styles.channel_video_create_time}>
                        {timeForToday(asd)}
                    </span>
                    
                </div>
            </div>
        </div>

    </>
    );
}


export default memo(VideoItems);