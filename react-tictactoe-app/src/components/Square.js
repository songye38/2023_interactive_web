import React from "react"
import "./Square.css"

export default class Square extends React.Component {

    render(){
        return (
            <button className="square" onClick={()=>{
                // this.setState({value:'X'}) //state변경해주는 부분
            }}>
                {this.props.value} 
            </button>
        )
    }
}