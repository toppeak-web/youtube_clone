import React, { useEffect, useState } from 'react';

import './App.css';
import VideoList from './components/video_lists/Video_list';
import SearchHeader from "./components/search_header/Search_header"

function App({ yp }) {
  const [videos, setVideos] = useState([]);
  const search = q => {
    yp
      .search(q)//
      .then(videos => setVideos(videos))
  }

  useEffect(() => {
    yp
      .mostPopular()//
      .then(videos => setVideos(videos))
  }, [])
  return (
    <div className="App">
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
