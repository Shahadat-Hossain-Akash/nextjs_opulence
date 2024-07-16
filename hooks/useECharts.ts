import { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([CanvasRenderer]);

export const useECharts = (containerRef: any, options: any) => {
  useEffect(() => {
    const chart = echarts.init(containerRef.current, null, {
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
  }, [containerRef, options]);
};
