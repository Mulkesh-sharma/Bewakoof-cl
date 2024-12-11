import React from 'react';
import Fab from '@material-ui/core/Fab';
import { useStateValue } from './StateProvider';
import { getBagTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { NavLink } from 'react-router-dom';

function SubTotal() {
    const [{ bag, user }] = useStateValue();

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 style={{fontWeight:"600"}}>Price Summary</h5>
                    <p className="prices-final">
                        <CurrencyFormat 
                            renderText={value => <>{value}</>}
                            decimalScale={2}
                            value={getBagTotal(bag)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                        />
                    </p>
                    <p className="checkout-details">Total MRP (Inclusive of all taxes)</p>
                    <p className="prices-final" style={{color:"rgb(111, 186, 49)",fontWeight:"600"}}>FREE</p>
                    <p className="checkout-details">Shipping Charges</p>
                    <p className="prices-final"><b><CurrencyFormat 
                            renderText={value => <>{value}</>}
                            decimalScale={2}
                            value={getBagTotal(bag)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                        /></b></p>
                    <p className="checkout-details"><b>Final Amount</b></p>
                    <Fab className="btn-order" variant="extended"><NavLink exact to={!user ? "/login" : "/order-summary"}>Continue</NavLink></Fab>
                </div>
            </div>
        </>
    )
}

export default SubTotal;
