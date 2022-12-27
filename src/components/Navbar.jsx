import React from 'react'
import { Stack } from "@mui/material"
import { Link } from 'react-router-dom'
import { SearchBar, Logo2 } from '../components/index'

const navbar = () =>(
    <Stack direction='row' allignItems="center" p={2} sx={{position:'sticky',background:'#000',top:'0',justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',alignItems:'center'}}>
          <Logo2 />
      </Link>
      <SearchBar />
    </Stack>
)


export default navbar
