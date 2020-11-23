import React, { Component } from 'react'

export class Forms extends Component {

    constructor()
    {
        super()
        this.state=
        {
            firstName:'',
            lastName:'',
            isFriendly:false,
            gender:'',
            favColor:'green'
        }
        this.change=this.change.bind(this)
    }
    change(event)
    {
        const {name,value,type,checked} = event.target;
        type === "checkbox"? 
            this.setState({[name]:checked}) : 
            this.setState({[name]:value});
    }

    render() {
       const style={width:'50%'}
        return (
            <div className='container' style={style}>
                <form>
                    <input 
                    type="text" 
                    placeholder="Enter fname" 
                    value={this.state.firstName} /* controlled form */
                    name='firstName' 
                    onChange={this.change}></input>
                    <br></br>
                    <input 
                    type="text" 
                    placeholder="Enter lname" 
                    value={this.state.lastName} /* controlled form */
                    name='lastName' 
                    onChange={this.change}></input>
                     <br></br>
                    <label>
                    <input 
                    type="checkbox"
                    name="isFriendly"
                    checked={this.state.isFriendly}
                    onChange={this.change}
                    />
                    Is Friendly ??!
                    </label>
                    <br></br>
                    <label>
                    <input 
                    type="radio"
                    name="gender"
                    checked={this.state.gender === 'male'}
                    value="male"
                    onChange={this.change}
                    />
                    Male
                    </label>
                    <br></br>
                    <label>
                    <input 
                    type="radio"
                    name="gender"
                    checked={this.state.gender === 'female'}
                    value="female"
                    onChange={this.change}
                    />
                    Female
                    </label>
                    <br />
                    <label>Select Favourite color:</label>
                    <br />
                    <select 
                    name='favColor'
                    value={this.state.favColor}
                    onChange={this.change}
                    >
                        <option value="blue">Blue</option>
                        <option value="orange">Orange</option>
                        <option value="green">Green</option>
                    </select>
                    <br />
                    <button>Submit</button>
                </form>
        <h2>{this.state.firstName} {this.state.lastName}</h2>
        <p>Favourite:{this.state.favColor}</p>
            </div>
        )
    }
}

export default Forms
