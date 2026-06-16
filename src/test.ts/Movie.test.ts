import { Movie } from '../Movie.js';

let movie: Movie;

beforeEach(() => {
    movie = new Movie(
        'Мстители',
        2012, 
        'США', 
        'Avengers Assemble!', 
        'фантастика', 
        '137 мин'
    );
});

test('getInfo should return the correct string', () => {
    const info = movie.getInfoMovie();

    expect(info).toContain('Название: Мстители');
    expect(info).toContain('Год: 2012');
    expect(info).toContain('Страна: США');
    expect(info).toContain('Слоган: Avengers Assemble!');
    expect(info).toContain('Жанр: фантастика');
    expect(info).toContain('Время: 137 мин');
});