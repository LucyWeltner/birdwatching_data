import React from "react"
export default class Bar extends React.Component {
	render() {
		return (
			<rect x={this.props.xAxis*10+15} y={180-this.props.height} height={this.props.height} width="10"/>
		)
	}
}
