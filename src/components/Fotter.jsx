import React from 'react'
import { useSelector } from 'react-redux'

function Fotter() {
    const data = useSelector(state => state.gateReducer.products);
    const total = data.reduce((total, item) => total = total + (item.price * item.count), 0)
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }}>
            {
                data.map((item) => (
                    <div className='item' key={item.id}>
                        <div>
                            <span style={{ fontSize: "18px", color: "black" }}>
                                {item.count > 0 && item.name}
                            </span>
                        </div>
                        <div>
                            <span style={{ fontSize: "18px", color: "black" }}>
                                {item.count > 0 && "x"}  {item.count > 0 && item.count}
                            </span>
                        </div>
                        <div  >
                            <span style={{ fontSize: "18px", color: "linear-gradient(180deg, #2ecc71, #1abc9c)" }}>
                                {item.count > 0 && "$"} {item.count > 0 && item.price}
                            </span>
                        </div>
                    </div>
                ))
            }
            {
                total > 0 && <>
                    <hr style={{ border: "1px solid black", width: "30%" }} />
                    <div className='item' style={{ marginBottom: "30px" }}>
                        <div>
                            Total
                        </div>
                        <div>

                            ${total}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Fotter
