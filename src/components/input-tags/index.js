import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { TextField, Box } from '@mui/material';

import Tag from './Tag';

const InputTags = forwardRef(({
  tags: initTags = [],
  iconStart = null,
  height = 48,
  sx = {},
  tagItemSx = {},
  placeholder,
  onChange,
  ...props
}, ref) => {
  const _inputRef = useRef();
  const [tags, setTags] = useState(initTags);
  const [isFocus, setIsFocus] = useState(false);
  const initInputWidth = 80;
  const [inputWidth, setInputWidth] = useState(initTags.length > 0 ? initInputWidth : '100%');

  useImperativeHandle(ref, () => ({
    getTags: () => tags,
    setTags: (aryTags) => {
      setTags(aryTags);
      if (aryTags.length > 0) {
        setInputWidth(initInputWidth);
      } else {
        setInputWidth('100%');
      }
    },
  }));

  const handleSubmitTag = () => {
    const inputValue = _inputRef.current.value;
    if (inputValue === null || inputValue === '') {
      return;
    }

    let index = tags.indexOf(inputValue);
    let updatedTags = [...tags];
    if (index > -1) {
      updatedTags.splice(index, 1);
    } else {
      updatedTags.push(inputValue);
    }
    setTags([...updatedTags]);
    _inputRef.current.value = '';
    setInputWidth(initInputWidth);

    if (onChange) {
      onChange([...tags]);
    }
  }

  const handleDeleteTag = () => {
    const inputValue = _inputRef.current.value;
    if (!!inputValue || tags.length < 1) {
      return;
    }

    tags.splice(tags.length - 1, 1);
    setTags([...tags]);

    if (onChange) {
      onChange([...tags]);
    }
  }

  const inputTagSx = {
    '.MuiInputBase-root': {
      minHeight: height,
      paddingTop: '5px',
      paddingBottom: '5px',
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#F2F4F5',
      borderRadius: '4px',
      position: 'relative',
      paddingLeft: (iconStart ? height - 8 : 8) + 'px',
    },
    'fieldset': {
      borderWidth: 0,
    },
    '.MuiInputBase-root.Mui-focused fieldset': {
      borderWidth: '0!important',
    },
    '.MuiInputBase-input': {
      display: 'inline',
      width: inputWidth + (typeof inputWidth === 'string' ? '' : 'px'),
      maxWidth: '100%',
      minHeight: height - 12,
      boxSizing: 'border-box',
      paddingLeft: '8px',
    },
    '.tag-item': {
      marginLeft: '8px',
      // transform: 'translateY(-1px)',
      marginTop: '3px!important',
      marginBottom: '3px!important',
      ...tagItemSx,
    },
  }

  return (
    <TextField
      inputRef={_inputRef}
      onChange={e => {
        let value = e.target.value;
        let valueWidth = value.length * 11 + 14 * 2;
        if (valueWidth > initInputWidth) {
          setInputWidth(valueWidth);
        } else if (inputWidth > initInputWidth) {
          setInputWidth(initInputWidth);
        }
      }}
      placeholder={(isFocus || tags.length > 0) ? '' : placeholder}
      onFocus={(e) => {
        let value = e.target.value;
        let valueWidth = value.length * 11 + 14 * 2;
        setInputWidth(Math.max(initInputWidth, valueWidth));
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
        if (tags.length < 1) {
          setInputWidth('100%');
        }
      }}
      fullWidth
      size='small'
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleSubmitTag();
        }
        if (e.key === 'Backspace') {
          handleDeleteTag();
        }
      }}
      InputProps={{
        startAdornment: (
          <>
            {iconStart && (
              <Box
                display="inline-flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  minWidth: height,
                  minHeight: height - 2,
                  position: 'absolute',
                  top: 0, left: 0,
                }}
              >
                {iconStart}
              </Box>
            )}

            {tags.map((tag, index) => (
              <Tag
                key={index}
                name={tag}
                onDelete={() => {
                  tags.splice(index, 1);
                  setTags([...tags]);
                  if (onChange) {
                    onChange([...tags]);
                  }
                  if (tags.length < 1) {
                    setInputWidth('100%');
                  }
                }}
                sx={{ borderRadius: '4px' }}
                className="tag-item"
              />
            ))}
          </>
        ),
      }}
      sx={{
        ...inputTagSx,
        ...sx
      }}
      {...props}
    />
  )
})

export default InputTags;

export { default as Tag } from './Tag';
export { default as TagsList } from './TagsList';