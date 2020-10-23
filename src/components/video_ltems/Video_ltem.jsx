import React from 'react';
import styles from "./Video_ltem.module.css"

function VideoItems({ video: { snippet } }) {  //props.video.snippet
    let d = new Date();
    let asd = snippet.publishedAt
    let Y_year = asd.substr(0,4)
    let Y_month = asd.substr(5,2)
    let Y_day = asd.substr(8,2)
    let Y_hours = asd.substr(11,2)
    return (
        <>
        <div className={styles.ytb_ui}>
            <div className={styles.ui_thumb}>
                <img src={snippet.thumbnails.medium.url} alt="" className={styles.thumb_img} />
            </div>
            <div className={styles.ui_content}>
                <div className={styles.content_title}>
                    Title: {snippet.title}
                </div>
                <div className={styles.content_channel}>
                    <span className={styles.channel_name}>
                        Channel: {snippet.channelTitle} {snippet.title} {/*  <i class={styles.fa_check_circle}></i> */}
                    </span>
                    <span className={styles.channel_video_create_time}>
                        {/* {snippet.publishedAt} */}
                        {d.getFullYear() - Number(Y_year)}년
                        {1+ d.getMonth() - Number(Y_month)}월
                        {d.getDate() - Number(Y_day)}일 전
                        {/* {d.getHours() - Number(Y_hours)}시
                        {console.log(Number(Y_year))}
                        {console.log(Y_month)}
                        {console.log(Y_day)}
                        {console.log(Y_hours)}
                        {console.log(snippet.publishedAt)}
                        {console.log(1)}
                        {console.log(1+ d.getDate())} */}
                    </span>
                    
                </div>
            </div>
        </div>

    </>
    );
}


export default VideoItems;