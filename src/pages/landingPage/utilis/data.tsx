import { Business, Email, Groups, Interests, JoinLeft, TrackChanges, WorkspacePremium } from "@mui/icons-material";
import Freelanceimg1 from '@/assets/imgs/landingpage/freelanceimg1.png';
import Freelanceimg2 from '@/assets/imgs/landingpage/freelanceimg2.png';
import Freelanceimg3 from '@/assets/imgs/landingpage/freelanceimg3.png';
import Freelanceimg4 from '@/assets/imgs/landingpage/freelanceimg4.png';

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
];

export const nextJobSteps = [
  { label: "Sign Up", description: "Create one profile" },
  { label: "Search", description: "Browse niche job listings" },
  { label: "Apply", description: "Apply your dream job" },
  { label: "Interview", description: "Keep updated with status" },
  { label: "Get Hired", description: "Start your new job" },
  { label: "Review", description: "Enhance your skill: Explore new skills" },
];


export const freelancePortfolioImgs = [
  {
    img: Freelanceimg1
  },
  {
    img: Freelanceimg2
  },
  {
    img: Freelanceimg3
  },
  {
    img: Freelanceimg4
  }
]