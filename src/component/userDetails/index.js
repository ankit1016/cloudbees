import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Avatar, Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Octokit } from '@octokit/core';
import UserDetailsSkeleton from './skeleton';

const octokit = new Octokit();

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
const [loader,setLoader] = useState(true)
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await octokit.request(`GET /users/${username}`);
        setLoader(false)
        setUser(response.data);
      } catch (error) {
        setLoader(false)
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [username]);

  return (
    <div style={{margin:"10%"}}>
      {loader ? <UserDetailsSkeleton/>:(
        <Card style={{ maxWidth: 600, margin: 'auto', padding: 20, borderRadius: 8, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: '#f2f2f2' }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4} align="center">
                <Avatar src={user?.avatar_url} alt={`${user?.login} Avatar`} style={{ width: 120, height: 120,border:'0.1rem solid #b9bdba' }} />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h5" gutterBottom style={{textTransform:"capitalize"}}>
                 {user?.login}
                </Typography>
                <Typography variant="body1" gutterBottom sx={{margin:"0.5rem"}}>
                 Name: <span style={{fontWeight:"600"}}> {user?.name||"N/A"}</span>
                </Typography>
                <Typography variant="body1" gutterBottom sx={{margin:"0.5rem"}}>
                 Email: <span style={{fontWeight:"600"}}>{user?.email||"N/A"}</span>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{margin:"0.5rem"}}>
                  Company: <span style={{fontWeight:"600"}}>{(user?.company || "N/A")}</span>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{margin:"0.5rem"}}>
                  Location: <span style={{fontWeight:"600"}}>{user?.location||"N/A"}</span>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{margin:"0.5rem"}}>
                  Followers:<span style={{fontWeight:"600"}}> {user?.followers||"N/A"}</span>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{margin:"0.5rem"}}>
                  Following:<span style={{fontWeight:"600"}}> {user?.following||"N/A"}</span>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{margin:"0.5rem"}}>
                  Public Repositories: <span style={{fontWeight:"600"}}>{user?.public_repos||"N/A"}</span>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{margin:"0.5rem"}}>
                  Bio:<span style={{fontWeight:"600"}}> {user?.bio||"N/A"}</span>
                </Typography>
                {/* Add more details as needed */}
                
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    <div style={{textAlign:"center"}}><IconButton className='iconButton' component={Link} to="/" style={{ marginTop: 16,padding:14, alignSelf: 'flex-end' }}>
                  <ArrowBack />
                </IconButton>
                </div> 
    </div>
  );
};

export default UserDetails;
