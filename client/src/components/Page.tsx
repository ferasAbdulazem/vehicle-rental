import { Paper as MuiPaper } from '@mui/material';
import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from './Navigation/AppBar';

interface IProps {
  children: ReactNode;
}

const Paper = styled(MuiPaper)(({ theme }) => ({
  margin: '85px 0 0 75px',
  padding: theme.spacing(2.5),
}

));

const Page : React.FC<IProps> = ({ children }) => (
  <>
    <AppBar />
    <Paper>
      {children}
    </Paper>
  </>
);

export default Page;
