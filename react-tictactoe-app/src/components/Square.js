import React from "react"
import "./Square.css"

export default class Square extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value : null,
        }
    }
    render(){
        return (
            <button className="square" onClick={()=>{
                this.setState({value:'X'}) //state변경해주는 부분
            }}>
                {this.state.value} //변경해준 값을 칸 안에 표시해주기
            </button>
        )
    }
}