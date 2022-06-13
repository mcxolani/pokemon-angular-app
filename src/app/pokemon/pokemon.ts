export interface Pokemon {
    name: string;
    stats?: Stat[];
    image: string;
}

export interface Stat {
    base_stat: number
    effort: number
    stat: StatDetail
}

export interface StatDetail {
    name: string
    url: string
}
