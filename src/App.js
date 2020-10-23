import React, { useEffect, useState } from 'react';

import './App.css';
import VideoList from './components/video_lists/Video_list';

function App() {
  const [videos, serVideos] = useState([]);
  

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com//youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB4FfyoH7pqexVLafezqj0B_1Q9A0Nytj4",
     requestOptions)
      .then(response => response.json())
      .then(result => serVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])
  return (
    <>
    <VideoList videos={videos}/>
    </>
  );
}

export default App;
