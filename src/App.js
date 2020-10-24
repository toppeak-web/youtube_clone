import React, { useEffect, useState } from 'react';

import './App.css';
import VideoList from './components/video_lists/Video_list';
import SearchHeader from "./components/search_header/Search_header"

function App() {
  const [videos, setVideos] = useState([]);
  const search = q =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com//youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=AIzaSyB4FfyoH7pqexVLafezqj0B_1Q9A0Nytj4`, requestOptions)
      .then(response => response.json())
      .then(result => 
        result.items.map(item => ({...item , id: item.id.videoId}))
      )
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
  

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com//youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyB4FfyoH7pqexVLafezqj0B_1Q9A0Nytj4",
     requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className="App">
    <SearchHeader onSearch={search}/>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
