import { shadowStyles } from "@/styles/utilis/utilis";

export const heroSeactionStackStyling = {
    height: '66vh',
    maxWidth: '800px',
    paddingTop: '5rem',
    justifyContent: 'center',
    alignItems: 'center'
};

export const driveUsCardStylings = (primary: string) => ({
    padding: 2,
    width: '100%',
    border: `1px solid ${primary}`,
    cursor: 'pointer',
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "scale(1.1)", // Correct property and syntax
        boxShadow: shadowStyles.lg,
    },
});