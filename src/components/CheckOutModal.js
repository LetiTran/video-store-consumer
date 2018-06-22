import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

class CheckOutModal extends Component {

  render () {
    if(!this.props.show) {
     return null;
   }

   return (
      <div className="backdrop" >
        <div className="modal" >
          {this.props.children}
          <div className="footer">
          <p> Successfully rented movie!</p>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOutModal;

CheckOutModal.propTypes = {
children: PropTypes.node,
onClose: PropTypes.func,
show: PropTypes.bool
}
