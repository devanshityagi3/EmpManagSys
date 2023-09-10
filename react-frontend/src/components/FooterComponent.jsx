import React, { Component } from 'react'

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className='absolute bottom-0 w-full h-[50px] bg-black text-center text-white'>
            <span>All Rights Reserved 2023 @EmpManagSys</span>
        </footer>
      </div>
    )
  }
}

export default FooterComponent;