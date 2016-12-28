import React from 'react'

class HelloMessage extends React.Component {
  render () {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    );
  }
};

HelloMessage.propTypes = {
  name: React.PropTypes.string
};