import { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`
const Result = ({ html, css, js, setHtml, setCss, setJs }) => {
    const [src, setSrc] = useState('');
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    console.log(src)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 550);

        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (
        <Container style={html || css || js ? null : { background: '#444857' }}>
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{background: '#444857'}}
            />
            {/* <Typography color={'white'} sx={{ml :2}}>...</Typography> */}
        </Container>
    )
}

export default Result;