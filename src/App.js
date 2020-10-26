import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import VideoList from './components/video_lists/Video_list';
import SearchHeader from "./components/search_header/Search_header"
import VideoDetail from './components/video_detail/Video_detail';

function App({ yp }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)
  const selectVideo = (video) => {
    setSelectedVideo(video)
  }
  const search = useCallback(q => {
    setSelectedVideo(null)
    yp
      .search(q)//
      .then(videos => setVideos(videos))
  }, [])

  useEffect(() => {
    yp
      .mostPopular()//
      .then(videos => setVideos(videos))
  }, [])
  return (
    <div className="App">
      <SearchHeader onSearch={search} />
      <section className="content">
        {selectedVideo &&(
        <div className="detail">
          {selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail>}
        </div>
        )}
        <div className="list">
          <VideoList videos={videos} onVideoClick={selectVideo}/>
        </div>
      </section>
    </div>

  );
}

export default App;
