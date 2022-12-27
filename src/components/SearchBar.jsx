import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        backgroundColor: "gray",
        borderRadius: 20,
        border: '1px solid black',
        pl:2,
        boxShadow: 'none',
        mr: { sm: 5 }
    }}
    >
        <input
        className='search-bar'
        placeholder='Wyszukaj...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <IconButton type="submit" sx={{p:'10px'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar