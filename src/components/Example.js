import React, { Component } from 'react';
import Conditionals from './Conditionals';

export default class Example extends Component {
constructor()
{
    super();
    this.state=
    {
        isLoading:true,
        click:1
    }
}
componentDidMount()
{
    setTimeout(()=>
    {
        this.setState({isLoading:false})
    },2000);
}

    render() {
        return (
            <div>
                <Conditionals isLoading={this.state.isLoading} click={this.state.click} />
            </div>
        )
    }
}
