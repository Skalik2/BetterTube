import { useState, useEffect } from "react" 
import { Box, Stack, Typography } from "@mui/material"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Sidebar, Videos } from "./index"

const Feed = () => {

  const [SelectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`).then((data)=>setVideos(data.items));
  }, [SelectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md: 'row'}}}>
      <Box sx={{ height: {sx: 'auto', md: '92vh'}, overflow: 'scroll', borderRight: '1px solid #3d3d3d',px: { sx:0, md:2 }}}>
        <Sidebar 
          selectedCategory={SelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt:1.5, color:"#fff"}}>
          Copyright 2022
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{
          color: "white"
        }}>
          {SelectedCategory} <span style={{color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed