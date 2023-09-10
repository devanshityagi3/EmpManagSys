import React, { Component } from 'react'

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className='bg-white border-gray-200 dark:bg-gray-900 p-7'>
                <div>
                    <span className="text-white text-2xl font-semibold ml-2">Employee Management App</span>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}

export default HeaderComponent;