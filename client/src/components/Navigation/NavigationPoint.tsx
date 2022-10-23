import {
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  title: string,
  to: string,
  icon: ReactElement,
  isNavbarOpen: boolean
}

const NavigationPoint = ({
  to, icon, isNavbarOpen, title,
}: IProps) => {
  const navigate = useNavigate();

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isNavbarOpen ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={() => navigate(to)}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isNavbarOpen ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ opacity: isNavbarOpen ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavigationPoint;
