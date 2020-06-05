import React from "react"
import Bar from "./bar.js"
export default class Graph extends React.Component {
	render() {
		console.log(this.props.data)
		return (
			<svg viewBox = "0 0 200 200">
				<text x="10" y ="20">{this.props.title}</text>
				<line x1="10" y1="25" x2="10" y2="180" stroke="black"/>
				<line x1="10" y1="180" x2="180" y2="180" stroke="black"/>
				{this.props.data.map((height, index) => <Bar key={index} xAxis={index} height={height*5}/>)}
			</svg>
		)

	}
}


