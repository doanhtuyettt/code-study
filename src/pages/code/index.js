import { Box, Typography, Grid, Avatar } from "@mui/material"
import Header from "./Header"
import Code from "@/components/common/Code"
import React, { useState } from "react"
import Result from "@/components/common/Result"
import { RiArrowDownSLine } from 'react-icons/ri'
const CodeEditor = () => {
    const [html, setHtml] = useState();
    const [js, setJs] = useState();
    const [css, setCss] = useState();
    const avatarStyle = { backgroundColor: '#5419dd', width: 30, height: 30, marginBottom: '20px' }
    return (
        <Box>
            <Header />
            <Grid container alignItems={"baseline"}>
                <Grid item xs={4} px={2} >
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: 23, fontWeight: 600, mb: 1 }}>Task</Typography>
                        <Typography>Write a program that creates a script display "Code Study" then prints the following text on the screen:</Typography>
                        <pre class=" language-markup" style={{ background: 'black', padding: '15px' }}><code class=" language-markup" style={{ color: 'white' }}>Hello Code Study</code></pre>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: 23, fontWeight: 600, mb: 1 }}>Theory</Typography>
                        <Typography>Note:</Typography>

                        <ul>

                            <li>The display: grid directive creates only a single-column grid container. Therefore, the grid items will display in the normal layout flow (one item below another).</li>
                            <li>Converting a node to a grid box model makes the element's direct children become grid items..</li>
                            <li>The display: grid directive creates only a single-column grid container. Therefore, the grid items will display in the normal layout flow (one item below another).</li>
                        </ul>


                        <Typography sx={{ fontSize: 15 }}>Write a program that creates a script díplay "Code Study" then prints the following text on the screen:</Typography>
                        <pre class=" language-markup" style={{ background: 'black', padding: '15px' }}><code class=" language-markup" style={{ color: 'white' }}>Hello Code Study</code></pre>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: 23, fontWeight: 600, mb: 1 }}>Instruction</Typography>

                        <Typography>For example:</Typography>
                        <pre class=" language-python" style={{ background: 'black', padding: '15px', color: 'white' }}>
                            <code class=" language-python">
                                {`<h1>I am a headline made with HTML</h1>
<p>And I am a simple text paragraph. The color of this text is styled with CSS. Click the button below to remove me through the power JavaScript.</p>
<button>Hide the text above</button>`}
                            </code>
                        </pre>
                    </Box>
                </Grid>
                <Grid item xs={8} pl={2}> 
                    <Code html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJS={setJs} />
                    <Result html={html} css={css} js={js} setHtml={setHtml} setCss={setCss} setJS={setJs} />
                </Grid>
             </Grid > 
        </Box>

    )
}
export default CodeEditor