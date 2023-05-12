import { useState, useEffect, useRef } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { currencyFormat } from '@/utils/formatNumber';
import { getCurrencyLabel } from '@/utils/helper';
import { CURRENCY_UNIT } from '@/config';

const InputStyle = styled(TextField)(({ height, theme: { palette } }) => ({
  '.MuiInputBase-root': {
    minHeight: height,
    '&:hover fieldset': {
      border: '1px solid ' + palette.text.border,
    },
  },
  '.MuiInputAdornment-root .MuiTypography-root': {
    fontSize: 'inherit',
    fontWeight: 500,
  },
}));

const toNumber = (numStr, unit) => {
  let isVn = (unit === CURRENCY_UNIT.VND.value);
  let thoursands = isVn ? '.' : ',';
  let decimal = isVn ? ',' : '.';

  let number = numStr.toString().replace(/[^0-9.,]+/g, '');
  let numberSep = number.split(decimal);

  if (numberSep.length === 1) {
    return number.replaceAll(thoursands, '') * 1;
  }

  let decimalAmount = numberSep[numberSep.length - 1];
  let amount = numberSep.slice(0, numberSep.length - 1)
    .join('')
    .replaceAll(thoursands, '');

  return (amount + '.' + decimalAmount) * 1;
}

const InputCurrency = ({
  value = '',
  onChange,
  onBlur,
  onFocus,
  height = 44,
  currencyUnit = CURRENCY_UNIT.VND.value,
  sx = {},
  ...props
}) => {
  currencyUnit = currencyUnit ?? CURRENCY_UNIT.VND.value;
  const [inputVal, setInputVal] = useState();
  const _focusing = useRef(false);

  useEffect(() => {
    if (!_focusing.current && value) {
      value = currencyFormat(value, currencyUnit, false);
    }
    setInputVal(value);
  }, [value, currencyUnit]);

  const replaceCurrency = (val) => {
    return toNumber(val, currencyUnit);
  }

  const handleChange = (e) => {
    let val = e.target.value;
    if (val && val !== '0') {
      val = replaceCurrency(val);
    }

    setInputVal(val);

    if (onChange) {
      onChange(val * 1);
    }
  }

  const handleBlur = (e) => {
    let val = e.target.value;
    if (val && val !== '0') {
      val = currencyFormat(val, currencyUnit, false);
    }

    if (val.toString().trim() === '') {
      val = '';
    }
    setInputVal(val);

    _focusing.current  = false;
    if (onBlur) {
      onBlur(replaceCurrency(val));
    }
  }

  const handleFocus = (e) => {
    let val = e.target.value;
    if (val && val !== '0') {
      val = replaceCurrency(val);
    }

    if (val.toString().trim() === '0') {
      val = '';
    }
    setInputVal(val);

    _focusing.current = true;
    if (onFocus) {
      onFocus(replaceCurrency(val));
    }
  }

  return (
    <InputStyle
      value={inputVal}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      fullWidth
      height={height}
      type="text"
      InputProps={{
        endAdornment: (
          <InputAdornment>
            {getCurrencyLabel(currencyUnit)}
          </InputAdornment>
        ),
      }}
      sx={sx}
      {...props}
    />
  )
}

export default InputCurrency;