import {
    Box,
    Typography,
    Paper,
    IconButton,
    Grid2,
    Stack,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const stats = [
    {
        label: "Total Applications",
        value: 198,
        change: 9.78,
        isPositive: true,
        icon: <DescriptionIcon />,
    },
    {
        label: "Interview Schedule",
        value: 36,
        change: 6.29,
        isPositive: true,
        icon: <DescriptionIcon />,
    },
    {
        label: "Application Rejected",
        value: 56,
        change: 1.78,
        isPositive: false,
        icon: <DescriptionIcon />,
    },
    {
        label: "Profile Visited",
        value: 96,
        change: 5.32,
        isPositive: true,
        icon: <VisibilityIcon />,
    },
];

export default function StatsOverview() {
    return (
        <Paper className="p-4 rounded-xl shadow-sm" elevation={2}>
            <Grid2 container spacing={3}>
                {stats.map((stat, index) => (
                    <Grid2 key={index} size={{ xs: 12, md: 6, xl: 6 }}>
                        <Box className="flex items-start justify-between p-4 border rounded-lg shadow-sm bg-white h-full">
                            <Box>
                                <Typography variant="body2" color="secondary">
                                    {stat.label}
                                </Typography>
                                <Box display={'flex'} gap={1}>
                                    <Typography variant="h2" className="font-bold">
                                        {stat.value}
                                    </Typography>
                                    <Stack className="flex items-center space-x-1 mt-1" justifyContent={'start'} alignItems={'start'}>
                                        <Box display={'flex'} gap={1}>
                                            {stat.isPositive ? (
                                                <ArrowUpwardIcon className="text-green-500" fontSize="small" />
                                            ) : (
                                                <ArrowDownwardIcon className="text-red-500" fontSize="small" />
                                            )}
                                            <Typography
                                                variant="body2"
                                                className={`${stat.isPositive ? "text-green-500" : "text-red-500"
                                                    }`}
                                            >
                                                {stat.change}%
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" color="secondary">
                                            from last week
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>

                            <IconButton
                                className="bg-blue-100 text-blue-700"
                                size="small"
                                sx={{ borderRadius: 2, bgcolor:'primary.main', color:'white' }}
                            >
                                {stat.icon}
                            </IconButton>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
        </Paper>
    );
}
