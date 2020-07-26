export type Locale = 'ru' | 'en';
export type Theme = 'dark' | 'light';

export interface IRouter {
    [key: string]: {
        name: string;
        path: string;
        component: React.FunctionComponent;
        icon: React.FunctionComponent;
    };
}

export interface IThemeContext {
    theme: Theme;
    setTheme: () => void;
}
