let bodyMovies = document.querySelector('body');
let h1 = document.querySelector('h1');


let backgroundColor = confirm('¿Desea modo oscuro?')
bodyMovies.style.backgroundColor = '#7f7f7f'
bodyMovies && bodyMovies.classList.add('fondoMoviesList')


h1.innerText += 'LISTADO DE PELÍCULAS';
h1.style.color =  'white';
h1.style.background = 'teal';
h1.style.padding = '20px';