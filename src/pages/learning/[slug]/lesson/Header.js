import { Toolbar, AppBar, styled, Typography, Box } from "@mui/material"
import { RiArrowLeftSLine } from 'react-icons/ri'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from "react";
export const Container = styled(AppBar)`
    background: #f8f9fa;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: '40px';
`
const Header = ({ html, css, js, setHtml, setCss, setJs }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <Toolbar>
                    <RiArrowLeftSLine color={'#343a40'} size={20} style={{ paddingBottom: '8px' }} />
                    <Typography sx={{ ml: 2, color: '#343a40', pb: 1 }}> Làm quen với HTML, CSS</Typography>

                </Toolbar>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon position tabs example"
                    sx={{
                        transform: 'translateX(600px)',
                        '& .MuiTab-root': {
                            padding: '0',
                        },
                        '& .Mui-selected':{
                            color:'#6610f2'
                        }

                    }}

                >
                    <Tab label="1" sx={{border:'1px solid grey', borderRadius:'8px',mr:2}}/>
                    <Tab label="2" sx={{border:'2px solid #6610f2', borderRadius:'8px',mr:2}}/>
                    <Tab label="3" sx={{border:'1px solid grey', borderRadius:'8px',mr:2}}/>
                    <Tab label="4" sx={{border:'1px solid grey', borderRadius:'8px'}}/>
                </Tabs>
            </Box>
        </Container>
    )
}
export default Header