export interface Period {
    start: string | null,
    end: string | null
}

export interface Configs {
    shortcuts?: {
        today?: string,
        yesterday?: string,
        past?: (period: number) => string,
        currentMonth?: string,
        pastMonth?: string,
    } | null,
    footer?: {
        cancel?: string,
        apply?: string
    } | null
}