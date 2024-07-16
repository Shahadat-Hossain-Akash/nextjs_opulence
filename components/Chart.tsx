/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, {useEffect, useRef} from 'react';
import { getStyles } from '@/utils/getStyles';
import { useECharts } from '@/hooks/useECharts';
import * as echarts from 'echarts'


export const Chart = () => {
    const container = useRef(null)
    const {props, itemStyleExpense, itemStyleIncome} = getStyles()
    const options = {
        series: [
            {
                ...props,
                data: [
                    {
                        value: 0,
                        name: 'Expense',
                        itemStyle: itemStyleExpense
                    }, {
                        value: 0,
                        name: 'Income',
                        itemStyle: itemStyleIncome
                    }
                ]
            }
        ]
    };
    useEffect(() => {
        const chart = echarts.init(container.current, null, {
          renderer: 'canvas',
          useDirtyRect: false,
        });
    
        chart.setOption(options);
    
        const resizeHandler = () => {
            chart.resize();
        };
    
        window.addEventListener('resize', resizeHandler);
    
        return() => {
            window.removeEventListener('resize', resizeHandler);
            chart.dispose();
        };
      }, [container, options]);

    return <div className='w-full'>
        <div ref={container} className=' w-full h-[400px] md:h-[700px]'></div>
    </div>;
};
