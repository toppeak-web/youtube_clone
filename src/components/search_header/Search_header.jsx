
import styles from "./Search_header.module.css"

import React, { memo, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchAppBar({onSearch})  {
  const classes = useStyles();
  const inputRef = useRef();
  const handleSearch = (e) =>{
      const value = e.target.value
      onSearch(value)
  }
  const onKeyPress = (e) =>{
      console.log("onKeyPress")
      handleSearch(e)
  }
  console.log("head")
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img className={styles.img} src="/images/logo.png" alt="logo" />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Youtube
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              ref={inputRef}
              onKeyPress={onKeyPress}
              type="search"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default memo(SearchAppBar)
// const SearchHeader = () => {
//     return (
//         <header className={styles.header}>
//             <div>
//                 <img className={styles.img} src="/images/logo.png" alt="logo" />
//                 <h1 className={styles.title}>Youtube</h1>
//             </div>
//             <input className={styles.input} type="search" placeholder="search.." />
//             <button className={styles.btn} type="submit">
//                 <img className={styles.btn_img} src="/images/free-icon-loupe-622669.png" alt="search" />
//             </button>
//         </header>
//     );
// };

// export default SearchHeader;