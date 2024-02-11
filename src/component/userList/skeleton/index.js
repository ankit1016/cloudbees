import React from 'react';
import { Card, CardContent, Grid, Skeleton } from '@mui/material';

const UserListSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {[...Array(30)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
             <div style={{display:"flex",justifyContent:"center"}}> <Skeleton variant="circular"sx={{width: 80, height: 80}} /></div>
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="70%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserListSkeleton;
