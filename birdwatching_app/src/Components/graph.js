import React from "react"
import Bar from "./bar.js"
import _ from "lodash"
import graphCSS from './graph.css'

export default class Graph extends React.Component {
	render() {
		let scale 
		if (_.max(this.props.data) >= 50) {
			scale = 1
		}
		else if (_.max(this.props.data) >= 40) {
			scale = 1.5
		}
		else if (_.max(this.props.data) >= 18) {
			scale = 2
		}
		else {	
			scale = 3
		}
		return (
				<svg viewBox = {`0 0 200 ${250/scale}`}>
					<text id="title" x="10" y ="20">{this.props.title}</text>
					<line x1="10" y1="25" x2="10" y2={180/scale} stroke="grey"/>
					<line x1="10" y1={180/scale} x2="180" y2={180/scale} stroke="grey"/>
					{this.props.data.map((height, index) => <Bar key={index} scale={scale} xAxis={index} height={height*scale} scale={scale} info={this.props.info}/>)}
					{this.props.dates.map((date, index) => <text x={index*10+13} fontSize="4" y={180/scale + 2} transform={`rotate(90 ${index*10+15}, ${180/scale + 5})`} key={index} info={this.props.info}>{date.replace(/_/g, " ") +" "}</text>)}
				</svg>
			)
	}
}



