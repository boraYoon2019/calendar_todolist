import React, { PureComponent } from 'react';
// import styled from 'styled-components';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from 'recharts';

const data = [
	{
		name: '월 평균 달성률',
		'9월': 90,
		'10월': 55,
		'11월': 60,
	},
];


function Charts(props) {

	const renderCustomizedLabel = (props) => {
		const { x, y, width, height, value } = props;
		const radius = 25;
	
		return (
			<g>
				<circle cx={x + width / 2} cy={y - radius} r={radius} fill='#ffc7c7' />
				<text
					x={x + width / 2}
					y={y - radius}
					fill='#424242'
					textAnchor='middle'
					dominantBaseline='middle'
				>
				{data[0]['11월']+'%'}
				</text>
			</g>
		);
	};

		return (
			<BarChart
				width={300}
				height={400}
				data={data}
				margin={{
					top: 50,
					right: 20,
					left: 10,
					bottom: 20
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey='9월' fill='#ffc7c7' minPointSize={5}></Bar>
				<Bar dataKey='10월' fill='#f08474' minPointSize={5}></Bar>
				<Bar dataKey='11월' fill='#f05454' minPointSize={10}>
					<LabelList content={renderCustomizedLabel} />
				</Bar>
			</BarChart>
		);
}

export default React.memo(Charts);
