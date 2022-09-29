import React from 'react'

function Header() {
  return (
    <div className='header'>
      <img src="https://neal.fun/spend/billgates.jpg" alt="image" />
      <h1>Spend Bill Gates' Money</h1>
    </div>
  )
}

export default React.memo(Header)
