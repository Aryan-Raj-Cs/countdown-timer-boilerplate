import React from 'react';
export default class CountdownForm extends React.Component {
     onSubmit(e) {
        e.preventDefault()
        var secondsStr = this.refs.seconds.value; 
        if(secondsStr>0){
        this.props.onSetCountdownTime(secondsStr)
        this.refs.seconds.value="";
        
        }
    }
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <input type="submit" className="button success expanded" value="Start Countdown"  />
                </form>
            </div>
        );
    }
}