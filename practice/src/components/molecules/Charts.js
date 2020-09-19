import React, { PureComponent } from 'react';
// import styled from 'styled-components';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from 'recharts';
import styled from 'styled-components';

const data = [
	{
		name: '월 평균 달성률',
		'7월': 90,
		'8월': 55,
		'9월': 60,
	},
];

const renderCustomizedLabel = (props) => {
	const { x, y, width, height, value } = props;
	const radius = 25;

	return (
		<g>
			<circle cx={x + width / 2} cy={y - radius} r={radius} fill='#eaf6ff' />
			<text
				x={x + width / 2}
				y={y - radius}
				fill='#424242'
				textAnchor='middle'
				dominantBaseline='middle'
			>
      {data[0]['9월']+'%'}
			</text>
		</g>
	);
};

class Example extends PureComponent {
	render() {
		return (
			<BarChart
				width={320}
				height={400}
				data={data}
				margin={{
					top: 50,
					right: 20,
					left: 10,
					bottom: 20,
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='7월' fill='#e5e5e5' minPointSize={5}></Bar>
				<Bar dataKey='8월' fill='#e5e5e5' minPointSize={5}></Bar>
				<Bar dataKey='9월' fill='#bbdefb' minPointSize={10}>
					<LabelList dataKey='name' content={renderCustomizedLabel} />
				</Bar>
			</BarChart>
		);
	}
}

export default Example;
