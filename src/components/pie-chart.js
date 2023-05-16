import React from 'react';
import Chart from "react-apexcharts";

import '../css/App.css';
import '../css/pie-chart.css';


const PieChart = ({}) => {
    return ( 
        <>
            <div className='flex-column pc-container'>
                <span>teste</span>
                <Chart
                    type='pie'
                    width={'100%'}

                    series={[100, 200, 300, 400, 500]}

                    options={{
                        labels:['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5']
                    }}


                />
            </div>  
        </>
     );
}
 
export default PieChart;