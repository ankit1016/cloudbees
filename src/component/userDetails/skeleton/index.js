import React from 'react';
import { Card, Grid, Skeleton } from '@mui/material';

const UserDetailsSkeleton = () => {
  return (
    <Card style={{ maxWidth: 600, margin: 'auto', padding: 20, borderRadius: 8, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', backgroundColor: '#ffffff' }}>
    <Grid container spacing={2} >
      <Grid item xs={12} sm={4} align="center">
        <Skeleton variant="circular" width={120} height={120} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Grid>
    </Grid>
    </Card>
  );
};

export default UserDetailsSkeleton;
