import React from 'react'

interface Props {
    onMenuClicked: () => void
}
const MenuSideBar = ({onMenuClicked}:Props) => {
  return (
    <div className=''>
      <span className='cursor-pointer' onClick={onMenuClicked}>close</span>
      <h1>Hello Navbar</h1>
    </div>
  )
}

export default MenuSideBar