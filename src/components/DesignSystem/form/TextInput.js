import { TextField, InputAdornment, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";

const TextInput = forwardRef(({
  type,
  label,
  value,
  variant,
  iconStart,
  iconEnd,
  onChange,
  onBlur,
  sx,
  height = 44,
  multiline = false,
  showClear = true,
  clearIcon = null,
  InputProps = {},
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showIconClear, setShowIconClear] = useState(false);
  const [shrink, setShrink] = useState(false);

  const _textField = useRef();
  const _inputRef = useRef();

  useImperativeHandle(ref, () => ({
    _inputRef: _inputRef.current,
    ..._inputRef.current,
    focus: () => {
      return _inputRef.current.focus();
    },
  }));

  useEffect(() => {
    if (value && !shrink) {
      setShrink(true);
    }

    setTimeout(() => {
      const inputAutofill = document.querySelector(`input[name="${props.name}"]:-webkit-autofill`);
      if (!shrink && inputAutofill) {
        setShrink(true);
      }
    }, 500);
  }, [value]);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleOnBlur = (e) => {
    if (!e.target.value) {
      setShrink(false)
      setShowIconClear(false);
    }
    if (onBlur) onBlur(e);
  };

  const getIcon = (name) => (
    <SvgIconStyle
      src={`/assets/icons/ds/${name}.svg`}
      sx={{ width: 19, height: 19 }}
    />
  );

  const ICONS = {
    eyes: getIcon("ic_eyes"),
    eyes_off: getIcon("ic_eyes_off"),
    clearText: getIcon("ic_clear"),
  };

  const sxStyles = {
    minWidth: "100px",
    width: '100%',
    maxWidth: '100%',
    "& .MuiInputBase-root": {
      height: multiline ? 'auto' : height,
      paddingLeft: iconStart ? '14px' : '8px',
      '&:hover fieldset': {
        borderColor: 'rgba(145, 158, 171, 0.32)',
      },
    },
    '& .MuiInputBase-multiline': {
      padding: '4px 8px',
    },
    '& .Mui-disabled': {
      background: '#EFF3F6',
    },
    "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
      transform: iconStart
        ? "translate(43px, 11px) !important"
        : "translate(14px, 11px) !important",
    },
    "& .MuiInputBase-input": {
      // padding: "8px 1px 8px !important",
    },
    "̃& .MuiButtonBase-root": {
      padding: "0",
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "0",
    },
    ...sx,
  };

  const _timeoutBlur = useRef();

  let inputProps = {
    type: type,
    label: label,
    value: value,
    variant: variant || "outlined",
    onChange: onChange,
    onFocus: () => {
      setShrink(true);
      setShowIconClear(true);
    },
    onBlur: (e) => {
      clearTimeout(_timeoutBlur.current);
      _timeoutBlur.current = setTimeout(() => {
        handleOnBlur(e);
      }, 150);
    },
    InputLabelProps: {
      shrink: shrink,
    },
    multiline,
    sx: sxStyles,
  };

  if (type === "password") {
    inputProps.type = showPassword ? "text" : "password";
  }

  const ClearIcon = () => (
    <IconButton
      onClick={() => {
        onChange("");
        setShrink(false);
      }}
      sx={{
        padding: 0,
        width: "19px",
        height: "19px",
        marginRight: type === "password" && "14.65px",
        visibility: value && showIconClear ? "visible" : "hidden",
      }}
    >
      {ICONS.clearText}
    </IconButton>
  )

  const ShowPassIcon = () => (
    type === 'password' ? (
      <IconButton
        onClick={handleClickShowPassword}
        sx={{
          padding: 0,
          visibility: type === "password" ? "visible" : "hidden",
        }}
      >
        {showPassword ? ICONS.eyes_off : ICONS.eyes}
      </IconButton>
    ) : null
  )

  const { startAdornment, endAdornment, ...InputPropsRest } = InputProps;
  const { children: childrenStart = null } = startAdornment?.props || {};
  const { children: childrenEnd = null } = endAdornment?.props || {};

  return (
    <TextField
      ref={_textField}
      inputRef={_inputRef}
      {...inputProps}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {iconStart || childrenStart}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {!multiline && showClear && (
              <ClearIcon />
            )}

            {clearIcon}

            {iconEnd ? iconEnd : (
              <>
                {childrenEnd}
                <ShowPassIcon />
              </>
            )}
          </InputAdornment>
        ),
        ...InputPropsRest,
      }}
      {...props}
    />
  );
});

TextInput.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  label: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  iconStart: PropTypes.node,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextInput;
