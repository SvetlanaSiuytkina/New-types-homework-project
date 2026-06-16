export class Movie {
    private title: string;
    private year: number;
    private country: string;
    private slogan: string;
    private genre: string;
    private time: number | string;

    constructor(
        title: string,
        year: number,
        country: string,
        slogan: string,
        genre: string,
        time: number | string
    ) {
        this.title = title;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
    }

    getInfoMovie(): string {
        return `Название: ${this.title}, Год: ${this.year}, Страна: ${this.country}, Слоган: ${this.slogan}, Жанр: ${this.genre}, Время: ${this.time}`
    }
}