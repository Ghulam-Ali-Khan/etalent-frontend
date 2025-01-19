import { Business, Email, Groups, Interests, JoinLeft, TrackChanges, WorkspacePremium } from "@mui/icons-material";

export const kpisData = (primary: string) => [
  {
    count: 10,
    icon: <Email sx={{ color: primary, fontSize: "40px", mb: 2 }} />,
    title: "Job listings",
  },
  {
    count: 12,
    icon: <Business sx={{ color: primary, fontSize: "40px", mb: 2 }} />,
    title: "Freelance Projects",
  },
  {
    count: 5,
    icon: <Groups sx={{ color: primary, fontSize: "40px", mb: 2 }} />,
    title: "Sponsored Jobs",
  },
];


export const driveUsData = (primary: string) =>[
  {
    icon: <JoinLeft sx={{ color: primary, fontSize: "50px", mb: 2 }} />,
    title: 'Transparency',
    description: 'Honesty in every listing, no hidden feess',
  },
  {
    icon: <TrackChanges sx={{ color: primary, fontSize: "50px", mb: 2 }} />,
    title: 'User-Focused',
    description: 'Inclusive opportunities for everyone',
  },
  {
    icon: <Interests sx={{ color: primary, fontSize: "50px", mb: 2 }} />,
    title: 'Diversity',
    description: 'Tailoring your search to your needs',
  },
  {
    icon: <WorkspacePremium sx={{ color: primary, fontSize: "50px", mb: 2 }} />,
    title: 'Quality',
    description: 'Only verified, quality job listings',
  }
]