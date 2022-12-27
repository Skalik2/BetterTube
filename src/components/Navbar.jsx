import { useState, useEffect } from 'react'
import { Stack } from "@mui/material"
import { Link } from 'react-router-dom'
import { SearchBar, Logo2, LogoPocket } from '../components/index'

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = function() {
      setScreenWidth(window.innerWidth);
  }
  })

  return(
    <Stack direction='row' allignItems="center" p={2} sx={{position:'sticky',background:'#000',top:'0',justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',alignItems:'center'}}>
        {screenWidth < 380 ? '' : (screenWidth > 820 ? <Logo2 /> : <LogoPocket />)}
      </Link>
      <SearchBar />
    </Stack>
)
};


export default Navbar
