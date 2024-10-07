import React from 'react'
import useStyles from './styles'
import SideBox from './SideBox/SideBox'
import SideBoxT from './SideBoxT/SideBox'
export default function RightSide() {
    const classes=useStyles()
  return (
    <div className={classes.aside}>
     <SideBox/>
     <SideBoxT/>
    </div>
  )
}
