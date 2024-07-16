export const getStyles = () => {
    const colorExpense = [
        {
            offset: 0,
            color: 'rgba(255, 82, 81, 1)', // Start color
        }, {
            offset: 1,
            color: 'rgba(255, 82, 81, .4)', // End color
        }
    ]
    const colorIncome = [
        {
            offset: 0,
            color: 'rgba(232, 255, 126, 1)', // Start color
        }, {
            offset: 1,
            color: 'rgba(232, 255, 126, 0.4)', // End color
        }
    ]
    const itemStyleIncome = {
        borderRadius: 16,
        borderColor: '#E8FF7E', 
        borderWidth: 1,
        color: {
            type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 1,
            colorStops: colorIncome,
            global: false,
        }
    }
    const itemStyleExpense = {
        borderRadius: 16,
        borderColor: '#FF5251',
        color: {
            type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 1,
            colorStops: colorExpense,
            global: false, 
        }
    }
    const props = {
        name: 'Analytics',
                type: 'pie',
                radius: [
                    '40%', '70%'
                ],
                avoidLabelOverlap: false,
                padAngle: 2,
                itemStyle: {
                    borderRadius: 16
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
    }

    return {props, itemStyleExpense, itemStyleIncome}
}