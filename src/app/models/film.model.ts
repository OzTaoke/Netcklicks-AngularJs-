export interface Film {
    id: number;
    title: string;
    original: string;
    genre: string[];
    raiting: number;
    link: string;
    image: string;
    desc1?: string;
    desc2?: string;
}