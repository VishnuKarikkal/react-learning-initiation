import React, { Component } from 'react'

export default class APIFetch extends Component {
    constructor()
    {
        super()
        this.state=
        {
            character:{},
            loading:false
        }
        this.changer=this.changer.bind(this)
    }
    changer(data)
    {
        this.setState({character:data,loading:false})
    }
    componentDidMount()
    {
        this.setState({loading:true})
        fetch('https://swapi.dev/api/people/1')
        .then(res=>res.json())
            .then(data=>this.changer(data))
            .catch(er=>{console.log(er)})
    }

    render() {
        return (
            <div>
                <h3>{this.state.loading?"slow connection":this.state.character.name}</h3>
            </div>
        )
    }
}
