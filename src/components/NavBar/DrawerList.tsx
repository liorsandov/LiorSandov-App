import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Typography from '@mui/material/Typography';
import style from './DrawerList.module.css';
import Link from 'next/link'

const ListTest = () : JSX.Element => {
  return (
    <>
      <Typography variant="subtitle2" component="div" className={style.ListTitle}>
        Hooks
      </Typography>
      <Link href="/UseContext" passHref>
        <ListItem button key={'UseContext'}>
          <ListItemIcon>
            <AllInclusiveIcon />
          </ListItemIcon>
          <ListItemText primary={'UseContext'} />
        </ListItem>
        </Link>
    </>
  )
};

export default function DrawerList(): JSX.Element {
    return(
      <>
        <List>
        {ListTest()}
        </List>
        <Divider />
      </>
    )
}