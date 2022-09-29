import React from 'react'
import { useSelector } from 'react-redux'

function Count() {
  const count = useSelector(state => state.gateReducer.count);
  return (
    <div className='count'>
      <div className='coun'>
        ${count}
      </div>
    </div>
  )
}

export default React.memo(Count)
