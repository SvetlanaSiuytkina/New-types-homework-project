import { Movie } from '../Movie';
import { Cart } from '../Cart';

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
    expect(cart.displayInfoMoviesInCart()).toEqual('Корзина пуста');
});

test('displayCart should return a string with information about movies', () => {
    expect(cart.displayInfoMoviesInCart()).toContain('1. Название: Мститетли');
});