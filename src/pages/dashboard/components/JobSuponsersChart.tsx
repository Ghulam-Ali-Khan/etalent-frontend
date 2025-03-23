import { chartColors } from "@/utilis/data";
import { Paper } from "@mui/material";
import Chart from "react-apexcharts";

const SponsoredJobsChart = () => {
    const chartOptions = {
        chart: {
            type: "bar",
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 4
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["SAP-ABAP", "UI/UX Design", "Data Analysis"],
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            show: true,
            labels: {
                style: {
                    fontSize: '12px'
                }
            }
        },
        colors: chartColors, // Matching the bar colors
        title: {
            text: "Sponsored Jobs Status",
            align: 'left',
            style: {
                fontSize: '16px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            text: "Submitted Application",
            align: 'left',
            style: {
                fontSize: '12px',
                color: '#666'
            }
        },
        legend: {
            show: false
        },
        grid: {
            strokeDashArray: 4
        }
    };

    const chartSeries = [
        {
            name: "Submitted Applications",
            data: [8, 13, 7] // SAP-ABAP, UI/UX Design, Data Analysis
        }
    ];

    return (
        <Paper className="p-2">
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={260}
            />
        </Paper>
    );
};

export default SponsoredJobsChart;
