import {
  AppBar,
  Box,
  Popover,
  ListItemButton,
  Container,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const wrapStyle = {
  border: "1px solid #CCD4DC",
  borderRadius: 8,
  backgroundColor: "#fff",
  padding: "16px 24px",
};

export const WrapBox = styled(Box)(({ noBorder, theme: { palette } }) => ({
  ...wrapStyle,
  ...(noBorder && { border: 'none' }),
  '.box-title': {
    padding: '0px 24px 14px',
    margin: '0 -24px 12px',
    borderBottom: '1px solid ' + palette.text.border,
  },
  '.box-title-line': {
    position: 'relative',
    paddingLeft: '11px',
    '&:before': {
      position: 'absolute',
      top: 6, left: 0,
      content: `""`,
      width: 3,
      height: 16,
      background: palette.text.active,
      display: 'block',
    },
  },
  '.box-title-desc': {
    '> svg': { marginRight: 6, transform: 'translateY(3px)', },
    fontSize: 13,
    color: palette.text.secondary,
    marginBottom: '8px',
  },
}));

const headerHeight = 80;

export const IViecAppBar = styled(AppBar)(({ theme }) => {
  return {
    display: "flex",
    width: "100%",
    height: headerHeight + 'px',
    color: "white",
    alignItems: "center",
    background: 'transparent',
    boxShadow: "none",
    justifyContent: "center",
    zIndex: 3000,
    position: "relative",
    '&:after': {
      content: `""`,
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0, left: 0,
      background: 'linear-gradient(90deg, #FF8C2D 0%, #EEA445 100%)',
      zIndex: -1,
    },

    '.box-navbar': {
      // flexGrow: 1,
      display: "none",
      justifyContent: "center",
      position: "absolute",
      left: "10px",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
    '.menu-page': {
      flexGrow: 1,
    },
    '.button-pages': {
      color: "white",
      // display: "block",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      padding: "10px 16px",
      margin: "0 8px",
      borderRadius: '6px',
      zIndex: (theme) => theme.zIndex.drawer + 1,
      "&:hover": {
        backgroundColor: 'rgba(253, 253, 253, 0.25)'
      },
    },
    '.button-pages-selected': {
      // display: "block",
      fontWeight: 700,
      borderRadius: '6px',
      fontSize: 14,
      lineHeight: "20px",
      padding: "10px 16px",
      margin: "0 8px",
      zIndex: (theme) => theme.zIndex.drawer + 1,
      background: "#fff",
      color: '#F26A12',
      transition: 'all ease-in-out 0.3s',
      '&:hover': {
        background: '#fff',
      },
    },
    '.user-login': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: '6px',
      padding: '11px 16px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(253, 253, 253, 0.25)'
      }
    },
  };
});

export const LinkNavbar = styled(Box)(({ theme }) => {
  return {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
});

export const ButtonLink = styled(ListItemButton)(() => {
  return {
    height: "53px",
    paddingTop: 0,
    paddingBottom: 0,
    ".drawer-link": {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#455570",
      fontFamily: "inherit",
      "&:hover": {
        color: "#F77A0C",
      },
    },
  };
});

export const PopoverNavbar = styled(Popover)(({ theme }) => {
  return {
    marginTop: "5px",
    marginLeft: "4em",
    zIndex: 3002,
    "& .MuiPaper-root": {
      overflow: "hidden",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
});

export const ContainerFooter = styled(Container)(() => {
  return {
    position: "relative",
    minHeight: "466px",
    backgroundColor: "#091E42",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ".inforIViec": {
      width: "auto",
      height: "0.6em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    ".hotlineIViec": {
      border: "1px solid white",
      borderRadius: "8px",
      padding: "8px 10px",
      height: "60px",
      width: "174px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    ".title-pages": {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "space-between",
      fontSize: "16px",
    },
    ".list-pages": {
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "400",
      color: "white",
      "&:hover": {
        color: "#F77A0C",
      },
    },
  };
});

export const BoxFooter = styled(Box)(() => {
  return {
    width: "73.85%",
    height: "422px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    color: "white",
    fontWeight: "500",
    lineHeight: "20px",
    fontSize: "400px",
  };
});

export const MainContent = styled("div")(({ theme, grey, absoluteHeader }) => {
  const absoluteStyles = absoluteHeader ? {
    '#header': {
      position: 'absolute',
      top: 0,
      '&:after': {
        transition: 'all ease-in-out 0.3s',
        opacity: 0,
      },
      '&:hover': {
        '&:after': {
          opacity: 1,
        },
        '.button-pages-selected': {
          background: "#fff",
          color: '#F26A12',
          '&:after': {
            display: 'none',
          },
        },
        '.employer-btn': {
          background: '#172B4D',
        },
      },

      '.button-pages-selected': {
        background: 'transparent',
        color: '#fff',
        '&:after': {
          content: `""`,
          display: 'block',
          width: 'calc(100% - 32px)',
          height: '1px',
          position: 'absolute',
          bottom: 6, left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff',
        },
      },

      '.employer-btn': {
        background: '#1565C0',
      },
    },
  } : {};

  return {
    backgroundColor: grey
      ? theme.palette.background.paper
      : theme.palette.background.default,
    // paddingTop: headerHeight,
    ...absoluteStyles,
  }
});

export const MainContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1372,
  },
  width: '100%',
  maxWidth: 'calc(100% - 160px)',
  marginLeft: "auto",
  marginRight: "auto",
}));

export const FormStyle = styled('div')(({ theme: { palette } }) => ({
  '.form-group': {
    marginBottom: '24px',
    '&.no-margin': {
      marginBottom: 0,
    },
    '> label': {
      marginBottom: '8px',
      display: 'block',
      fontWeight: 500,
      color: palette.text.secondary,
    },
    '.MuiInputBase-root': {
      borderRadius: '6px',
      fontSize: 14,
      '.tag-item': {
        transform: 'none',
      },
      '.MuiInputBase-input': {
        // transform: 'translateY(1px)',
      },
    },
    
    // '.MuiSelect-select': {
    //   '.selected-value, .placeholder': {
    //     transform: 'translateY(1px)',
    //   },
    // },
  },
  '.form-value': {
    height: 44,
    background: '#EFF3F6',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
   
  },
}));

export const TableContainerStyle = styled(TableContainer)(({ theme: { palette } }) => ({
  background: '#fff',
  borderRadius: 0,
  'table': {
    'tbody > tr': {
      '&:nth-child(2n)': {
        background: '#F3F4F6',
      },
      'th, td': {
        padding: '16px 8px',
        color: palette.text.secondary,
      },
      'th': {
        fontWeight: 500,
      },
      'td': {
        fontWeight: 400,
      },
    }
  },
}));
