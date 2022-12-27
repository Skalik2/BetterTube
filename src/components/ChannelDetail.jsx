import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {Videos, ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  
  console.log(channelDetail,videos);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
        <Box>
          <div style={{background: 'linear-gradient(140deg, rgba(252, 192, 89, 1) 0%, rgba(41, 53, 86, 1) 91%)', zIndex: 10,height:'300px'}}/>
          <ChannelCard channelDetail={channelDetail} marginTop='-140px'/>
        </Box>
        <Box p='2' display='flex'>
          <Box sx={{ mr: {sm:'100px'}}}/>
            <Videos videos={videos}/>
        </Box>
    </Box>
  )
}



export default ChannelDetail
