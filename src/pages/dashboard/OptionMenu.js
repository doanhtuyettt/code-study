import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RiApps2Line } from 'react-icons/ri'
import { useRouter } from 'next/router';

const ITEM_HEIGHT = 48;

export default function OptionMenu({ user, SignInUser }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const hanldeLogOut = () => {
    localStorage.removeItem("user");
    SignInUser(null);
    router.push("/signup");
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <RiApps2Line color={'white'} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >

        <MenuItem onClick={() => {
          router.push('/profile')
        }}>
          Profile
        </MenuItem>
        <MenuItem onClick={hanldeLogOut}>
          Log out
        </MenuItem>
      </Menu>
    </div>
  );
}