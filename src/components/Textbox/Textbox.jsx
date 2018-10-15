import React from 'react';
import './Textbox.css';

class Textbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            invalid: false,
            focused: false
        };
        this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidMount(){
        this.setState({
            invalid: this.props.invalid
        })
    }

    componentWillReceiveProps(newProps){
        if(this.props.invalid !== newProps.invalid){
            this.setState({
                invalid: newProps.invalid
            })
        }
    }

    handleFocus(){
        this.setState({
            focused: !this.state.focused
        });
    }

    render(){
        let extraStyle = {};
        let extraStyleForLabel = {};
        if (this.state.invalid){
            if(this.state.focused){
                extraStyle = {"border": "1px solid gray", "backgroundColor": "white"};
            } else{
            extraStyle = {"border": "1px solid #FF2968", "backgroundColor": "#fcc2c7"};
            }
            extraStyleForLabel = {"color": "#FF2968", "opacity": 1}
        } else{
            extraStyle = {};
            extraStyleForLabel = {};
        }
        
        let type = "text";
        if(this.props.password){
            type = "password"
        }
        return(
            <div className="tb-div">
                <input type={type} className="cupertino-textbox" onFocus={this.handleFocus} 
                                    onBlur={this.handleFocus} 
                                    style={extraStyle} 
                                    required />
                <span className="rs-float-label" style={extraStyleForLabel}>{this.props.label}</span>
            </div>
        );
    }
}

export default Textbox;