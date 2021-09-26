import React from 'react'
import Bar from './Bar'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <Bar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;