import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyAmount, buyProduct, sellProduct } from '../redux/gates/gateSlice';
function Product() {
  const data = useSelector(state => state.gateReducer.products);
  const count = useSelector(state => state.gateReducer.count);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const handleChange = (e, id) => {
    setQuery(Number(e.target.value))
    dispatch(buyAmount({query,id}))
  };
  const handleBuy = (id) => {
    dispatch(buyProduct(id));

  };
  const handleSell = (id) => {
    dispatch(sellProduct(id))
  };
  return (
    <div className='parent'>
      <div className='products'>
        {
          data.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.img} alt="image" />
                <br />
                <span className='text1'>
                  {item.name}
                </span>
                <span className='text2'>
                  ${item.price}
                </span>
                <div className='group'>
                  <button
                    style={{
                      backgroundColor: item.count > 0 ? 'red' : 'rgb(44, 44, 44)',
                      color: "white"
                    }}
                    disabled={item.count > 0 ? false : true}
                    onClick={() => handleSell(item.id)}
                    className='but1'>Sell</button>
                  <input
                    value={query}
                    placeholder={item.count}
                    onChange={(e) => handleChange(e, item.id)}
                    type="number" />
                  <button
                    disabled={item.price > count ? true : false}
                    onClick={() => handleBuy(item.id)}
                    className='but2'>Buy</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default React.memo(Product)
