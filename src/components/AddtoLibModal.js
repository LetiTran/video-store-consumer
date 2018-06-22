import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

class AddtoLibModal extends Component {

  render () {
    if(!this.props.show) {
     return null;
   }

   return (
      <div className="backdrop">
        <div className="modal modal--blue">
          {this.props.children}
          <div className="footer">
          <p> Successfully added movie to Library!</p>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddtoLibModal;

AddtoLibModal.propTypes = {
children: PropTypes.node,
onClose: PropTypes.func,
show: PropTypes.bool
}
