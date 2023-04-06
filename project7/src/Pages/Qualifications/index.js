import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function Qualifications(){
  const [loader,setLoader]=  useState(true);
  const [qualifications,setQualifications] = useState(null);
  const connectToServer = async () => axios.get('http://localhost:8000/Qualifications')
                                           .then(res=>{
                                              console.log(res.data);
                                              setQualifications(res.data);
                                              setLoader(false)

                                           }).catch(err=>console.log(err))
                                           useEffect(()=>{

                                           
  connectToServer();   
                                           },[])       
    return(
        
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://th.bing.com/th/id/OIP.k2Hj9ZrYMvRXKLwEhO3nmwHaE5?pid=ImgDet&rs=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.02 CGPA
              </Typography>
              {" — Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://th.bing.com/th/id/OIP.ynqCqDDza88lYf2qazPM-AHaFj?w=203&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </ListItemAvatar>
        <ListItemText
          primary="Kakatiya Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                89% CGPA
              </Typography>
              {" — Intermediate studies with Computers & Sciences"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://th.bing.com/th/id/OIP.VUC8x9VvnCY_Q2aT5MXzvAHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Siddartha Vidya Nilayam"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                82% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
          />
          </ListItem>
          </List>


        
    )
}