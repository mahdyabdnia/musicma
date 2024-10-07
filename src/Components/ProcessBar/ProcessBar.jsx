import React from 'react'
import useStyles from './styles'

export default function ProcessBar() {
    const classes=useStyles();
  return (
    <div className={classes.process_root}>
       <div className={classes.spiner}></div>
       <h2 className={classes.wait_text}>در حال بارگذاری . . .</h2>
    </div>
  )
}
