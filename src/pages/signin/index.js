
import NextLink from "next/link";
import { Box, Link, Stack, Typography, Avatar } from "@mui/material";
import { STYLE_CONSTANT } from "./config";
import RegisterForm from "@/components/auth/RegisterForm";
export default function Register() {
    const avatarStyle = { backgroundColor: '#5419dd', width: 50, height: 50, marginBottom:'20px' }
    return (
        <>

            <Box
                mt={"36px"}
                mb={"36px"}
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{
                        padding: 7.5,
                        bgcolor: STYLE_CONSTANT.COLOR_BACKGROUND,
                        minWidth: "1020px",
                        mb: 4.5,
                        boxShadow:
                            "0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)",
                    }}
                >
                    <Stack>
                        <Avatar style={avatarStyle}>
                        </Avatar>
                        <Typography
                            variant="h4"
                            width={STYLE_CONSTANT.WIDTH_FULL}
                            sx={{
                                fontSize: STYLE_CONSTANT.FONT_2XL,
                                fontWeight: STYLE_CONSTANT.FONT_BOLD,
                                mb: 1,
                                color: STYLE_CONSTANT.COLOR_TEXT_PRIMARY
                            }}
                        >
                            CREATE ACCOUNT
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: 13,
                                fontWeight: STYLE_CONSTANT.FONT_NORMAL,
                                width: STYLE_CONSTANT.WIDTH_FULL,
                            }}
                        >
                            Do you have account CodeStudy?
                            <NextLink href=''>
                                <Link
                                    variant="subtitle2"
                                    sx={{
                                        marginLeft: 1.25,
                                        fontWeight: STYLE_CONSTANT.FONT_SEMIBOLD,
                                        color: STYLE_CONSTANT.COLOR_PRIMARY,
                                        fontSize: STYLE_CONSTANT.FONT_SM,
                                    }}
                                >
                                    Start Coding now!
                                </Link>
                            </NextLink>
                        </Typography>
                    </Stack>
                    <RegisterForm />
                </Box>
            </Box>
        </>

    );
}
