import {Movie} from './Movie';

class Cart {
    items: Movie[];

    constructor() {
        this.items = [];
    }

    addItemMovie() {
        this.items.push();
    }

    getItemsMovies() {
        return this.items;
    }

    displayInfoMoviesInCart() {
        if (this.items.length === 0) {
            return 'Ваша корзина пуста';
        }

        return this.items/////////
    }
}