import React, { Component } from 'react';
// import Logo from '../Nav/duck_logo.png';
// import {Link} from 'react-router-dom';
// import './Navbar.css';
class PayPalButton3 extends Component {
  render() {
    return (
		<div className="col-xs-4 table-bordered" >
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <h3>Super Squeakly Clean Carwash</h3>
                <p>We arrive on site and give your car an awesome wash.</p>
                <p>Scrup and shine the rims and gloss the tires</p>
                <p>Make your glass so clean that its invisable</p>
                <p>Wax it Show Room Shiny</p>
                <p>$100</p>
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="U7HWZ79UPTUD2"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
		</div>
    );
  }
}

export default PayPalButton3;

