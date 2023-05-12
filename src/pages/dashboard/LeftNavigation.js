import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { RiHomeHeartFill } from 'react-icons/ri'
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';

export default function LeftNavigation() {
    return (
        <Box sx={{ transform: 'rotate(90deg)','& > :not(style)': { m: 1 } ,left:0, positon:'relative'}}>
            <Fab color="primary" aria-label="add">
                <RiHomeHeartFill />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <RiHomeHeartFill />
            </Fab>
            <Fab variant="extended">
                <RiHomeHeartFill sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab disabled aria-label="like">
                <RiHomeHeartFill />
            </Fab>
        </Box>
    );
}