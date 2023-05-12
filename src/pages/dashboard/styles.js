import { styled } from '@mui/material/styles';
import { Box, InputBase, SwipeableDrawer } from '@mui/material';
import { wrapStyle } from '@/layouts/styles';

export const WrapBox = styled(Box)(wrapStyle);

export const ContainerSidebar = styled(Box)(({ theme }) => {
  const { background } = theme.palette;
  return {
    display: "flex",
    backgroundColor: background.paper,
    marginTop: 24,
    ".page-content": {
      flex: 1,
      marginLeft: 24,
    },
    ".page-sidebar": {
      ...wrapStyle,
      width: 325,
      padding: 0,
    },
  };
});

export const SearchFormStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    ".search-box": {
      maxWidth: 499,
    },
  },
  ...wrapStyle,
  borderRadius: 0,
}));

export const HeaderSearchStyle = styled(Box)(({ theme }) => ({
  minHeight: 500,
  display: "flex",
  alignItems: "center",
  "> div": {
    width: "100%",
  },
  background: "url(/assets/images/jobs/header-bg.png)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  ".search-container": {
    padding: "30px 0",
    background: "transparent",
    border: "none",
  },
  ".search-form-title": {
    fontSize: 28,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 24,
  },
  ".search-form": {
    background: "rgba(18, 29, 37, 0.5)",
    borderRadius: "8px",
    padding: "36px 40px",
    flexDirection: "column",
  },
  ".search-box": {
    position: "relative",
    marginBottom: 24,
    ".MuiInputBase-root": {
      background: "#fff",
      borderRadius: "4px",
      paddingRight: 116,
      fontWeight: 500,
      "&.Mui-focused, &:hover": {
        fieldset: {
          border: "none",
        },
      },
    },
    ".MuiInputAdornment-root": {
      marginRight: 18,
      marginLeft: 8,
    },
    ".input-search-btn": {
      position: "absolute",
      top: 10,
      right: 10,
      boxShadow: "none",
    },
  },
  ".search-select-box": {
    width: '100%',
    "> .MuiInputBase-root": {
      flex: 1,
      color: "#fff",
      ".placeholder": {
        color: "#fff",
      },
      ".MuiSvgIcon-root": {
        color: "#fff",
      },
    },
  },

  [theme.breakpoints.up("sm")]: {
    "& div.search-box": {
      width: "100%",
      maxWidth: '100%',
      marginRight: 0,
    },
  },
  [theme.breakpoints.up("lg")]: {
    // minHeight: 580,
  },
}));

export const FilterFormStyle = styled("div")(({ }) => ({}));

export const JobsListStyle = styled(Box)(({ theme }) => {
  const { text, background } = theme.palette;
  return {
    marginBottom: 24,
    ".job-item": {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      '&:hover': {
        borderColor: background.orangeBg,
        boxShadow: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.3)',
      }
    },
    ".job-title": {
      flex: 1,
      marginBottom: 8,
      lineHeight: "24px",
      marginTop: "-2px",
      // minHeight: '52px',
      textTransform: 'capitalize',
      a: {
        fontSize: 18,
        color: text.primary,
        textDecoration: "none",
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    ".btn-hot": {
      marginLeft: 8,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: background.active,
      color: text.active,
    },
    ".job-type": {
      color: text.secondary,
      marginBottom: 12,
      fontSize:12,
    },
    ".job-location, .job-salary": {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 8,
    },
    ".job-location span": {
      color: text.primary,
    },
    ".job-salary span": {
      color: text.money,
    },
    ".job-company": {
      color: text.secondary,
      fontSize: 13,
      marginBottom: 16,
    },
    ".company-logo": {
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid #D3DEE5",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      // background: "#f5f5f5",
      "> img": {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
      },
    },
    ".job-footer": {
      fontSize:12,
      color: text.primary,
      paddingTop: 12,
      paddingBottom: 12,
      marginBottom: -12,
      borderTop: `1px solid ${text.border}`,
      strong: {
        color: text.sub,
      },
      "> button": {
        borderRadius: '6px',
        "&:hover svg": {
          color: text.active + "!important",
        },
        '&:hover .bookmark-notSelected': {
          color: text.secondary + '!important',
        }
      },
    },

    [theme.breakpoints.down("xl")]: {
      ".job-item": {
        padding: "16px 16px",
      },
    },
  };
});

export const FeatureJobsStyle = styled("div")(({ theme }) => ({
  marginTop: 80,
  marginBottom: 100,
  ".feature-container": {
    padding: "46px 60px",
    background: "#EDEDED",
  },
  ".jobs-box": {
    maxWidth: "calc(100% - 300px - 60px)",
  },
  ".feature-title-box": {
    width: 300,
    marginRight: 60,
    ".title-line": {
      marginBottom: 16,
      marginTop: 24,
      display: "flex",
      fontSize: 32,
      lineHeight: "40px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "-0.02em",
      "> span": {
        flex: 1,
        borderBottom: "3px solid #FF9800",
        transform: "translateY(-10px)",
      },
    },
    ".title-line.line-left > span": {
      marginRight: "16px",
    },
    ".title-line.line-right > span": {
      marginLeft: "16px",
    },
    ".title-desc": {
      fontSize: "1rem",
      color: theme.palette.text.sub,
      "> span": {
        margin: "0px 16px",
      },
      "> svg": {
        verticalAlign: "middle",
      },
    },
  },
  ".job-item": {
    boxShadow: "0px 3px 5px rgba(9, 30, 66, 0.2)",
    backgroundColor: "#fff",
    borderRadius: "4px",
  },
  ".job-content": {
    padding: "8px 12px 24px",
    textAlign: "center",
  },
  ".job-title": {
    lineHeight: "20px",
    "> a": {
      fontSize:14,
      fontWeight: 600,
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
  },
  ".job-desc": {
    fontSize: 13,
    color: theme.palette.text.sub,
  },
  ".job-thumbnail": {
    width: "100%",
  },

  '.swiper-slide': {
    height: 'auto',
    '.job-item': {
      height: '100%',
    },
  },

  [theme.breakpoints.down("xl")]: {
    ".feature-container": {
      padding: "24px",
    },
    ".feature-title-box": {
      width: 270,
      marginRight: 40,
    },
  },
}));

export const JobsBoxStyle = styled("div")({
  '.sliders': {
    '> .swiper > div.swiper-pagination': {
      marginTop: 4,
    },
    '.swiper-slide': {
      height: 'auto',
      '.jobs-grid': {
        height: '100%',
        '> .MuiGrid-container': {
          height: '100%',
        },
      },
    },
  },
});

export const JobsTitleStyle = styled(Box)(({ theme }) => {
  const { text, background } = theme.palette;
  return {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "4px",
    marginBottom: "16px",
    padding: "24px 24px",
    border: "1px solid #CCD4DC",
    ".job-title": {
      flex: 1,
      fontSize:18,
      color: text.primary,
      marginBottom: '6px',
      ":hover": {
        color: "#F77A0C",
      },
    },
    ".btn-hot": {
      marginLeft: 8,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 6,
      fontSize: 12,
      backgroundColor: background.active,
      color: text.active,
      "&:hover": {
        backgroundColor: background.active,
      },
    },
    ".job-company": {
      fontSize: 14,
      color: text.sub,
      fontWeight: 500,
    },
    ".job-match": {
      fontSize: 12,
      fontWeight: "600",
      color: text.money,
      backgroundColor: "#E8F5E9",
      borderRadius: "6px",
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 10px",
      marginRight: 8,
    },
    ".job-compare": {
      marginLeft: 8,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 6,
      border: "1px solid #F77A0C",
      color: text.active,
      fontSize: 12,
      "&:hover": {
        backgroundColor: "white",
      },
    },
    ".job-function": {
      flexDirection: 'row-reverse',
    },
    ".job-apply": {
      textAlign: "right",
      display: "flex",
    },
    ".job-remainTime": {
      fontSize: 12,
      color: text.sub,
      fontWeight: 400,
      lineHeight: "20px",
      textAlign: "right",
      strong: {
        color: text.primary,
        fontWeight: 500,
      },
    },
    ".textField-report": {
      minHeight: "189px",
      width: "560px",
      padding: "0",
      color: "#A2AAB7",
      fontSize: "14px",
      fontWeight: 400,
      // "&:hover": {
      //   borderColor: "",
      // },
      "&:hover": {
        borderColor: text.active,
      },
    },
    ".job-logo": {
      width: "48px",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

export const JobDes = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    marginBottom: "16px",
    backgroundColor: "white",
    borderRadius: "4px",
    padding: "24px",
    border: "1px solid #CCD4DC",
    '.job-content': {
      fontSize: 14,
      color: theme.palette.text.sub,
      lineHeight: '24px',
    },
  };
});

export const BoxSummary = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  // minWidth: "282.33px",
  marginBottom: "24px",
  "& .MuiIconButton-root": {
    backgroundColor: "#F2F4F5",
    marginRight: "12px",
  },
  "& .title-summary": {
    color: "#5C6A82",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "20px",
    alignText: "stretch",
  },
  "& .detail-summary": {
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "20px",
    alignText: "stretch",
    color: "#172B4D",
  },
}));

export const BoxDetail = styled(Box)(() => {
  return {
    marginTop: "4px",
    marginBottom: "32px",
    "& .typoTitle": {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "26px",
      color: "#172B4D",
    },
    "& .typoContent": {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#455570",
      whiteSpace: "pre-line",
    },
  };
});

export const JobRecruitment = styled(Box)(() => ({
  width: "100%",
  border: "1px solid #CCD4DC",
  backgroundColor: "white",
  borderRadius: "4px",
  marginBottom: "20px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  ".share-link": {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    "& .MuiIconButton-root": {
      padding: 0,
      marginRight: "7px",
    },
    "& .MuiTypography-root": {
      color: "#172B4D",
      fontSize: 16,
      fontWeight: "600",
    },
  },
  ".copy-link": {
    marginBottom: "20px",
    ">div": {
      display: "flex",
      ">input": {
        flex: 1,
        height: "44px",
        border: "2px solid #CCD4DC",
        borderRadius: "6px",
        marginRight: "20px",
        padding: "12px 16px",
        fontSize: "14px",
        color: "#455570",
        textOverflow: "ellipsis",
      },
      ">button": {
        "&:hover": {
          borderRadius: "6px",
        },
      },
    },
    "& .MuiTypography-root": {
      color: "#455570",
      fontSize: 14,
      fontWeight: "500",
      marginBottom: "8px",
    },
  },
  ".social-link": {
    "& .MuiTypography-root": {
      color: "#455570",
      fontSize: 14,
      fontWeight: "500",
      marginBottom: "14px",
    },
    "& .MuiBox-root": {
      width: "40%",
      display: "flex",
      justifyContent: "space-between",
      "> .MuiIconButton-root": {
        padding: 0,
        marginRight: "7px",
      },
    },
  },
}));

export const BoxParagraph = styled(Box)(() => ({
  marginTop: "16px",
  marginBottom: "8px",
  "& .typoTitle": {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "26px",
    color: "#172B4D",
  },
  ".read-more": {
    color: "#F77A0C",
    fontWeight: 600,
    lineHeight: "20px",
    cursor: "pointer",
  },
}));

export const MapLocation = styled(Box)(() => ({
  width: "100%",
  height: "188px",
  borderRadius: "4px",
  overflow: "auto",
}));

export const CompanyInfor = styled(Box)(() => ({
  width: "100%",
  border: "1px solid #CCD4DC",
  backgroundColor: "white",
  borderRadius: "4px",
  overflow: "auto",
  ".poster": {
    width: "100%",
    height: "126px",
    imageRendering: "pixelated",
    objectFit: "cover",
  },
  ".job-logo": {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".company-intro": {
    padding: "20px",
  },
  ".company-name": {
    display: "flex",
    alignItems: "center",
    marginBottom: "4px",
    "& .MuiTypography-root": {
      fontSize: 16,
      fontWeight: "600",
      lineHeight: "24px",
      textAlign: "center",
      alignItems: "center",
      color: "#172B4D",
    },
  },
}));

export const ApplicationForm = styled(Box)(({ theme }) => {
  const { text, background } = theme.palette;
  return {
    marginBottom: 0,
    width: "100%",
    overflow: "hidden",
    "& .MuiRadio-root": {
      color: "#5C6A82",
      "&.Mui-checked": {
        color: text.active,
      },
      "&:hover": {
        backgroundColor: background.active,
      },
    },
    ".apply-by-profile-selected": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid #FB8906",
      borderRadius: "4px",
      padding: "16px 16px 16px 24px",
      marginBottom: "24px",
    },
    ".profile": {
      display: "flex",
      flexDirection: "column",
      ">p": {
        marginBottom: "14px",
        color: text.primary,
        fontWeight: 600,
        fontSize: 13,
        lineHeight: "20px",
        display: "inline-flex",
        alignItems: "center",
      },
      "& .MuiButton-root": {
        width: "240px",
        background: text.active,
        color: "white",
        lineHeight: "18px",
        fontSize: 12,
        fontWeight: 600,
        flexGrow: 1,
        order: 1,
        borderRadius: "6px",
        padding: "8px 10px",
        "&:hover": {
          backgroundColor: "#F26A12",
        },
      },
    },
    ".infor-candidate": {
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
      ".name-number": {
        marginLeft: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ".lastName-user": {
          fontSize: 13,
          color: '#455570',
          lineHeight: "20px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
        },
        ">span": {
          fontSize: 13,
          color: text.secondary,
          lineHeight: "20px",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
        },
      },
    },
    "& .MuiDivider-root": {
      fontSize: 13,
      color: text.secondary,
      order: 1,
      fontWeight: 400,
      lineHeight: "20px",
      margin: "24px 0",
    },
    ".apply-by-CV": {
      marginBottom: '16px',
      borderRadius: "4px",
      backgroundColor: "#F2F4F5",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px 8px 24px",
      "& .MuiTypography-root": {
        color: text.primary,
        fontSize: 13,
        fontWeight: 600,
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
      },
    },
    ".apply-by-profile": {
      borderRadius: "4px",
      backgroundColor: "#F2F4F5",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px 8px 24px",
      "& .MuiTypography-root": {
        color: text.primary,
        fontSize: 13,
        fontWeight: 600,
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
      },
    },
    ".apply-by-CV-selected": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 16px 8px 24px",
      backgroundColor: "white",
      border: "1px solid #FB8906",
      borderRadius: "4px",
      marginBottom: "24px",
      "& .MuiTypography-root": {
        color: text.primary,
        fontSize: 13,
        fontWeight: 600,
        lineHeight: "20px",
        display: "flex",
        alignItems: "center",
      },
    },
    ".form-group": {
      "& .MuiInputLabel-root": {
        color: '#172B4D',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "20px",
        backgroundColor: "white",
        marginBottom: "12px",
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: "6px",
        height: "40px",
        border: "1px solid #CCD4DC",
        paddingLeft: "7px",
        paddingRight: "14px",
      }
    },
    ".btn-uploadCV": {
      display: "flex",
      flexDirection: "row",
      marginBottom: "24px",
      gap: 16,
      ".chose": {
        color: "white",
        backgroundColor: text.active,
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        borderRadius: "6px",
        padding: "8px 12px",
        "&:hover": {
          backgroundColor: "#F26A12",
          borderRadius: "6px",
        },
      },
      ".choose": {
        color: text.search,
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: 600,
        padding: "8px 12px",
        "&:hover": {
          backgroundColor: background.active,
          borderRadius: "6px",
        },
      },
    },

    '.textfield-infor': {
      paddingBottom: 16,
    },

    '.cvs-list': {
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      paddingBottom: 16,
      '.cv-thumbnail': {
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        border: '1px solid transparent',
        marginRight: 16,
        '&.selected': {
          borderColor: text.active,
        },
        '&:after': {
          content: `""`,
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
        },
        '.cv-check': {
          position: 'absolute',
          top: 12, left: 12,
          background: '#fff',
        },
        '&:last-child': {
          marginRight: 0,
        },
      },
      '.thumbnail-box': {
        display: 'inline-block',
        width: 220,
        height: 295,
        overflow: 'hidden',
        '.thumbnail': {
          width: '100%',
          height: 'auto',
        },
        'embed.thumbnail': {
          height: 1000,
          transform: 'translateY(-47px) scale(1.025)',
        },
      }
    },
  };
});

export const BootstrapInput = styled(InputBase)(({ theme }) => {
  const { text } = theme.palette;
  return {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "white",
      border: "1px solid #8A94A5",
      fontSize: 14,
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        borderColor: text.active,
      },
    },
  };
});
export const MatchingFormStyle = styled("div")(({ theme }) => ({
  background: "#F2F4F5",
  padding: "24px",
  ".form-container": {
    background: "#fff",
    padding: "24px 24px 0",
    ".bg-col": {
      display: "flex",
      "> img": {
        marginLeft: "auto",
        marginTop: "auto",
      },
    },
  },
  '.tags-job .MuiInputBase-root': {
    paddingRight: '4px',
    background: '#fff',
    border: '1px solid ' + theme.palette.text.border,
    '.tag-item': {
      background: '#EFF3F6',
      height: 26,
    },
  },

  [theme.breakpoints.up("sm")]: {
    ".form-container": {
      padding: "40px 40px 0",
    },
  },
  [theme.breakpoints.up("xl")]: {
    ".form-container": {
      ".form-col": {
        width: "634px",
      },
      ".bg-col": {
        width: "calc(100% - 634px)",
      },
    },
  },
}));

export const PopupDetailStyle = styled(SwipeableDrawer)(({ theme: { palette, breakpoints } }) => ({
  zIndex: 1000,
  '.close-button': {
    position: 'absolute',
    top: 16, left: 0,
    width: 44, height: 44,
    minWidth: 0,
    padding: 0,
    background: '#fff',
  },
  '.preview-container': {
    height: '100vh',
    background: '#fff',
    '.job-detail-header': {
      border: 'none',
      marginBottom: 0,
      padding: '32px 32px 8px',
      '> .MuiGrid-container': {
        alignItems: 'flex-start',
        paddingBottom: 32,
        borderBottom: '1px solid ' + palette.text.border,
      },
    },
    '.job-title-box': {
      flex: 1,
      marginRight: 16,
      '> .MuiBox-root': {
        alignItems: 'flex-start',
      },
      '.btn-hot': {
        marginLeft: '12px',
      },
    },
    '.extra-buttons': {
      maxWidth: 142,
      flexDirection: 'column',
      marginLeft: 'auto',
      '.job-match': {
        margin: 0,
        marginBottom: 16,
      },
      '.job-compare': {
        marginLeft: 0,
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },

    '.job-description-box': {
      border: 'none',
      padding: '32px 32px',
      marginBottom: 0,
    },
    '.job-function': {
      padding: '16px 32px 24px',
    },
    '.preview-content': {
      overflow: 'auto',
      flex: 1,
    },
  },
  '.content-col': {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  '.related-col': {
    background: '#F2F4F5',
    height: '100vh',
    overflow: 'auto',
    padding: '24px',
  },

  [breakpoints.up('lg')]: {
    '.content-col': {
      width: 'calc(100% - 390px)',
    },
    '.related-col': {
      width: 390,
    },
  },
}));

export const RelatedBox = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  backgroundColor: "#fff",

  '.swiper-slide': {
    height: 'auto',
    '.jobs-grid': {
      height: '100%',
      '> .MuiGrid-container': {
        height: '100%',
      },
    },
  },
}));

export const CompareBox = styled(Box)(({ theme: { palette } }) => ({
  '.compare-header': {
    display: 'flex',
    margin: 0,
    padding: '32px 0',
    borderBottom: '1px solid ' + palette.text.border,
  },
  '.feature-title-box': {
    '.title-line': {
      fontSize: 44,
      textTransform: 'none',
      width: 257,
    },
  },
  '.compare-table': {
    '.compare-field-col .col-content': {
      width: 300 + 8 * 2,
    },
    '.compare-value': {
      width: 600,
    },
  },
  '.matching-percent': {
    color: palette.text.money,
    '> strong': {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: '48px',
    },
    '> p': {
      fontSize: 18,
      fontWeight: 600,
      marginTop: 12,
    },
    '&.not-suitable': {
      color: '#D32F2F',
    },
  },
}));

const addCompareJobAreaStyle = (palette) => ({
  '.add-job-area': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 230,
    border: '1px dashed ' + palette.text.border,
    borderRadius: '8px',
    '&:hover': {
      borderColor: palette.text.active,
    },
    fontFamily: 'inherit',
  },
  '.add-text': {
    marginTop: 16,
    fontSize: 14,
    fontWeight: 500,
    color: palette.text.placeholder,
  },
});

export const JobsCardStyle = styled(Box)(({ theme: { palette } }) => ({
  '.job-card': {
    position: 'relative',
    padding: '24px 16px',
    background: '#F3F4F6',
    borderRadius: '8px',
    '.company-logo': {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid #D3DEE5',
      overflow: 'hidden',
    },
    '.detail-btn': {
      background: '#fff',
      borderColor: palette.text.border,
    },
    '.close-btn': {
      position: 'absolute',
      top: 4, right: 4,
    },
  },
  ...addCompareJobAreaStyle(palette),
  '.job-compare-card': {
    height: '100%',
    '.add-job-area': {
      minHeight: 156,
    },
  },
}));

export const CompareModal = styled(Box)(({ theme: { palette } }) => ({
  '.selection-box': {
    marginLeft: -12,
    marginRight: -12,
    '> .MuiGrid2-root': {
      paddingLeft: 12,
      paddingRight: 12,
    },
  },
  '.compare-item': {
    height: '100%',
    minHeight: 230,
    '.compare-grid': {
      height: '100%',
      marginBottom: 0,
      '> div': {
        padding: 0,
        height: '100%',
      },
      '.job-item': {
        border: '1px solid ' + palette.text.active,
      },
    },
  },
  ...addCompareJobAreaStyle(palette),
  '.search-job': {
    '.MuiInputBase-root': {
      background: '#F2F4F5',
      borderRadius: '6px',
      'fieldset': {
        border: 'none',
      },
    },
  },
  '.jobs-list': {
    '.job-item:not(.disabled)': {
      cursor: 'pointer',
    },
    '.job-item.disabled': {
      background: '#F2F4F5',
    },
  },
}));

export const JobFunctionStyle = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: '16px 0px 0px',
  ".icon": {
    marginLeft: "22px",
    padding: "10px",
    borderRadius: "6px",
    "&:hover": {
      color: theme.palette.text.active,
    },
    '&:hover .bookmark-notSelected': {
      color: theme.palette.text.secondary + '!important',
    },
    '&:hover .bookmark-selected':{
      color: theme.palette.text.active + '!important',
    }
  },
  
}));

export const ApplyProgressStyle = styled(Box)(({ theme: { palette } }) => ({
  display: 'flex',
  width: '460px',
  maxWidth: '100%',
  margin: '16px auto 8px auto',
  '.progress-node': {
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    '&:before': {
      content: `""`,
      display: 'block',
      width: `calc(100% - ${24 + 5.5 * 2}px)`,
      height: '1.5px',
      background: '#D0D4DB',
      position: 'absolute',
      right: `calc(50% + ${12 + 5.5}px)`,
      top: '11.25px',
    },
    '&:first-child': {
      '&:before': { display: 'none' }
    },
  },
  '.node': {
    width: 24,
    height: 24,
    background: '#F3F4F6',
    borderRadius: '50%',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '12px',
    '&:before': {
      content: `""`,
      display: 'block',
      width: 14, height: 14,
      background: '#D0D4DB',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '.active-icon': {
      transform: 'translateY(2px)',
    },
  },
  '.node-label': {
    fontSize: 13,
    color: '#A2AAB7',
    fontWeight: 500,
  },
  '.progress-node.active': {
    '&:before': {
      background: palette.text.active,
    },
    '.node': {
      background: '#FFE0B2',
      '&:before': {
        display: 'none',
      }
    },
    '.node-label': {
      color: palette.text.active,
    },
  },
}));
export const RelatedJobsStyle = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  marginTop: "40px",
  marginBottom: "30px"
}));

export const RecentlyViewedJobsStyle = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  marginTop: "24px",
}));

export const FloatButtonsStyle = styled('div')(() => ({
  position: 'fixed',
  zIndex: 1,
  right: '1%',
  top: '80%',
  width: 'auto',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ' .float-btn': {
    width: '52px',
    hieght: '52px',
    margin: '8px 0',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
