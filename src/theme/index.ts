interface ColorsContent {
    main: string;
    secundary?: string;
    gradient?: string
}

interface ColorsStructure {
    primary: ColorsContent;
    black: ColorsContent;
    white: ColorsContent;
    gray: ColorsContent;
}

interface MetricsStructure {
    sm: number,
    md: number,
    lg: number,
    xlg: number,
    xxlg: number,
}

export interface ThemeInterface {
    colors: ColorsStructure
    metrics: MetricsStructure
}

export const theme: ThemeInterface = {
    colors: {    
        primary: {
            main: '#F24462'
        },
        black: {
            main: '#252732',
            secundary: '#2D324B'
        },
        white: {
            main: '#fff',
        },
        gray: {
            main: '#D9D9D9',
            secundary: '#A3A3A3'
        }
    },
    metrics: {
        sm: 8,
        md: 16,
        lg: 24,
        xlg: 32,
        xxlg: 44,
    }
} 