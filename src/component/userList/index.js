import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, CardContent, Typography, Grid } from '@mui/material';
import { Octokit } from '@octokit/core';
import UserListSkeleton from './skeleton';

const octokit = new Octokit();

const UserList = () => {
  const [users, setUsers] = useState([]);
  const[loader,setLoader] = useState(true) 
  useEffect(() => {
    const fetchUsers = async () => {
       
      try {
        const response = await octokit.request('GET /users');
        setUsers(response.data);
        setLoader(false)
      } catch (error) {
        setLoader(false)
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

 

  return (
    < >  
    <Typography variant="h4" sx={{textAlign:"center",color:"#000",margin:"1rem",paddingBottom:"0.5rem", borderBottom:'0.1rem solid #b9bdba'}}>
    Github Users List
    </Typography>


    {loader?
   <UserListSkeleton/>:
    
    <Grid container spacing={2} maxHeight={"90svh"} overflow={'scroll'} style={{padding:'2rem'}}>
      {users.map(user => (
        <Grid item key={user.id} xs={12} sm={6} md={4} sx={{padding:"1rem"}}>
          <Card className='card_mui' style={{borderRadius:'1rem',background:'#f2f2f2',cursor:'pointer'}} >
            <CardContent style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} sx={{ textAlign: 'center' }}>
              <Avatar src={user.avatar_url} style={{border:'0.1rem solid #b9bdba'}}  alt={`${user.login} Avatar`} sx={{ width: 80, height: 80, marginBottom: 2 }} />
              <Typography variant="h6" gutterBottom textTransform={'capitalize'}>
                {user.login}
              </Typography>
              <Typography variant="body2" color="textSecondary" textTransform={'capitalize'}>
                {user.name || ''}
              </Typography>
              <Link to={`/user/${user.login}`} style={{ textDecoration: 'none', marginTop: 2 }}>
                <Typography variant="body2" color="primary" fontFamily={'monospace'} className='viewDetails'>
                  View Details
                </Typography>
              </Link>
            </CardContent> 
          </Card>
        </Grid>
      ))}
    </Grid>}
    </>
  );
};

export default UserList;
