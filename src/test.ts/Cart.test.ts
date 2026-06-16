import { Movie } from '../Movie.js';
import { Cart } from '../Cart.js';

let cart: Cart;
let movie: Movie;

beforeEach(() => {
    cart = new Cart();
    movie = new Movie(
        'Мстители',
        2012, 
        'США', 
        'Avengers Assemble!', 
        'фантастика', 
        '137 мин'
    );
});

test('addItem should add the movie to the cart', () => {
    cart.addItemMovie(movie);
    expect(cart.getItemsMovies()).toEqual([movie]);
});

test('getItems should return an array of all the movies in the cart', () => {
    cart.addItemMovie(movie);
    expect(cart.getItemsMovies()).toEqual([movie]);
});

test('displayCart should return an empty cart message', () => {
    expect(cart.displayInfoMoviesInCart()).toEqual('Ваша корзина пуста');
});

test('displayCart should return a string with information about movies', () => {
    cart.addItemMovie(movie);
    const result = cart.displayInfoMoviesInCart();
    expect(result).toContain('1. Название: Мстители');
    expect(result).toContain('Год: 2012');
    expect(result).toContain('Страна: США');
    expect(result).toContain('Слоган: Avengers Assemble!');
    expect(result).toContain('Жанр: фантастика');
    expect(result).toContain('Время: 137 мин');
});