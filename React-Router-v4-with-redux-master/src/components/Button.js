import React, {Component} from 'react';

class Button extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div style={{margin:15}}>
        <button style={buttonstyle} type="submit" onClick={this.props.onSubmitClick}>{this.props.buttonName}</button>
      </div>
    )
  }
}
const buttonstyle={
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  float: 'right',
  marginBottom:'15px',
  width:'100%'
};

export default Button;
