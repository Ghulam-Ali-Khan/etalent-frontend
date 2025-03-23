// ApplicationsSummaryChart.js
import { chartColors } from "@/utilis/data";
import { Box, Button, Paper, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const ApplicationsSummaryChart = () => {
    const chartOptions = {
        chart: {
            type: "donut"
        },
        labels: ["On-Site", "Remote", "Hybrid"],
        colors: chartColors, // matching the color scheme
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Applications",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#999",
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                            }
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        }
    };

    const chartSeries = [98, 64, 36]; // On-Site, Remote, Hybrid

    return (
        <Paper className="p-2">
            <Box className="flex justify-between items-center mb-2">
                <Typography variant="h6" fontSize={'16px'} fontWeight={600}>Applications Summary</Typography>
                <Button variant="contained">
                    Work Model ▾
                </Button>
            </Box>
            <Box className="flex items-center">
                <Box className="w-1/2">
                    <Chart
                        options={chartOptions}
                        series={chartSeries}
                        type="donut"
                        height={240}
                    />
                </Box>
                <Box className="w-1/2 text-sm pl-4">
                    <Box className="flex justify-between mb-1">
                        <span className="text-gray-500">On-Site</span>
                        <span className="text-black font-medium">98</span>
                    </Box>
                    <Box className="flex justify-between mb-1">
                        <span className="text-gray-500">Remote</span>
                        <span className="text-black font-medium">64</span>
                    </Box>
                    <Box className="flex justify-between">
                        <span className="text-gray-500">Hybrid</span>
                        <span className="text-black font-medium">36</span>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default ApplicationsSummaryChart;
