import { FC } from "react";
import EconomyNewsList from "./Economy";
import EntertainmentNewsList from "./Entertainment";
import HealthNewsList from "./Health";
import NewsList from "./NewsList";
import SportNewsList from "./Sports";
import TechnologyNewsList from "./Technology";
import ComputerIcon from '@mui/icons-material/Computer';
import EuroIcon from '@mui/icons-material/Euro';
import FeedIcon from '@mui/icons-material/Feed';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Typography } from "@mui/material";

//making a route interface
interface Route {
    key: string,
    title: JSX.Element,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

//routing the pages and using typography with MUI icons
export const routes: Array<Route> =[
    {
        key: 'home-route',
        title: <Typography variant="subtitle1" component="div"><WhatshotIcon sx={{mr: 1}}/>Top Headlines</Typography>,
        path: '/',
        enabled: true,
        component: NewsList
    },
    {
        key: 'entertainment-route',
        title: <Typography variant="subtitle1" component="div"><TheaterComedyIcon sx={{mr: 1}}/>Entertainment</Typography>,
        path: '/entertainment',
        enabled: true,
        component: EntertainmentNewsList
    },
    {
        key: 'sports-route',
        title: <Typography variant="subtitle1" component="div"><SportsSoccerIcon sx={{mr: 1}}/>Sports</Typography>,
        path: '/sports',
        enabled: true,
        component: SportNewsList
    },
    {
        key: 'economy-route',
        title: <Typography variant="subtitle1" component="div"><EuroIcon sx={{mr: 1}}/>Economy</Typography>,
        path: '/economy',
        enabled: true,
        component: EconomyNewsList
    },
    {
        key: 'technology-route',
        title: <Typography variant="subtitle1" component="div"><ComputerIcon sx={{mr: 1}}/>Technology</Typography>,
        path: '/technology',
        enabled: true,
        component: TechnologyNewsList
    },
    {
        key: 'health-route',
        title: <Typography variant="subtitle1" component="div"><MonitorHeartIcon sx={{mr: 1}}/>Health</Typography>,
        path: '/health',
        enabled: true,
        component: HealthNewsList
    },
]