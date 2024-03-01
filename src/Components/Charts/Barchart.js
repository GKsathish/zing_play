import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Bar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartWidth: '100%'
		};
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		const width = window.innerWidth > 768 ? '100%' : ''; // Set to 100% on screens wider than 768px
		this.setState({ chartWidth: width });
	}
	render() {
		const options = {
			title: {
				text: "ZING USERS"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Jan",  y: 10  },
					{ label: "Feb", y: 15  },
					{ label: "Mar", y: 25  },
					{ label: "Apr",  y: 30  },
					{ label: "May",  y: 28  }
				]
			}
			]
		}
		return (
		<div className='p-3'>
			<CanvasJSChart options = {options}style={{ width: this.state.chartWidth }}></CanvasJSChart>
				
			
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Bar;                       