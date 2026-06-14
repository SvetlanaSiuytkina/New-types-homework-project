import {Movie} from './Movie';

export class Cart {
    private items: Movie[];

    constructor() {
        this.items = [];
    }

    addItemMovie(movie: Movie) {
        this.items.push(movie);
    }

    getItemsMovies() {
        return this.items;
    }

    displayInfoMoviesInCart(): string {
        if (this.items.length === 0) {
            return 'Ваша корзина пуста';
        }

        return this.items.map((movie, index) => 
            `${index + 1}. ${movie.getInfoMovie}`).join('\n\n');
    }
}