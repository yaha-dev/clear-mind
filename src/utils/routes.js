import { IoIosTimer, IoIosList, IoIosSettings } from 'react-icons/io';

import Timer from 'pages/Timer';
import Logs from 'pages/TimerLogs';
import Settings from 'pages/Settings';

export const routerList = {
    timer: {
        name: 'Timer',
        path: '/',
        component: Timer,
        icon: IoIosTimer,
    },
    timer_logs: {
        name: 'Logs',
        path: '/logs',
        component: Logs,
        icon: IoIosList,
    },
    settings: {
        name: 'Settings',
        path: '/settings',
        component: Settings,
        icon: IoIosSettings,
    },
};

export const routerKeys = Object.keys(routerList);
