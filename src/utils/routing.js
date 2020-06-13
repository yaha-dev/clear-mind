import Timer from 'pages/Timer';
import Logs from 'pages/TimerLogs';
import Settings from 'pages/Settings';

export const routerList = {
    timer: {
        name: 'Timer',
        path: '/',
        component: Timer,
    },
    timer_logs: {
        name: 'Logs',
        path: '/logs',
        component: Logs,
    },
    settings: {
        name: 'Settings',
        path: '/settings',
        component: Settings,
    },
};

export const routerKeys = Object.keys(routerList);
