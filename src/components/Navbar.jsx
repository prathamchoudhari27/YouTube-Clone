import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
// import { Height } from '@mui/icons-material';
import SearchBar from './SearchBar';


const Navbar = () => 
   (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{  background : '#000' , top : 0 , justifyContent: 'Space-between'}}
    >

      <Link to="/" style={{display : 'flex' , alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar/>
      
    </Stack>
  )



export default Navbar
