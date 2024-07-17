/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, {useCallback, useEffect, useRef} from 'react';
import { getStyles } from '@/utils/getStyles';
import { useECharts } from '@/hooks/useECharts';
import * as echarts from 'echarts'


export const Chart = () => {

    const container = useRef(null)
    const chartRef = useRef<echarts.ECharts | null>(null);
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

    const resizeHandler = useCallback(() => {
        chartRef.current?.resize();
      }, []);

    useEffect(() => {
        if (!container.current) return;

        const chart = echarts.init(container.current, null, {
          renderer: 'canvas',
          useDirtyRect: false,
        });
    
        chart.setOption(options);
        chartRef.current = chart;
    
        window.addEventListener('resize', resizeHandler);
    
        return() => {
            window.removeEventListener('resize', resizeHandler);
            chart.dispose();
        };
      }, [container, options, resizeHandler]);

    return <div className='w-full'>
        <div ref={container} className=' w-full h-[400px] md:h-[700px]'></div>
    </div>;
};
