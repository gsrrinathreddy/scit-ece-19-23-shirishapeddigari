import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Workshops(){
const [loader,setLoader] = useState(true);
    const [Workshops,setWorkshops] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Workshops')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setWorkshops(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
        <>
<Typography>my work shop is fswd </Typography>


        </>
        
    )
    }