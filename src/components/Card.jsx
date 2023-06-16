import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Card(props){
    return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
        <Paper elevation={15}>
            <h1>Hello World</h1>
        </Paper>
      </Box>
    )
}