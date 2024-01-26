var videos = [
    { titulo: 'Video 1', descripcion: 'Descripción del video 1', url: '../Videos/ay cabr0n.mp4' },
    { titulo: 'Video 2', descripcion: 'Descripción del video 2', url: '../Videos/DRAKE.mp4' },
    { titulo: 'Video 3', descripcion: 'Descripción del video 3', url: '../Videos/FUERZA.mp4' },
    { titulo: 'Video 4', descripcion: 'Descripción del video 4', url: 'https://www.youtube.com/embed/4xbFMg_u9rY?si=2bMyta_q6rIgj5cu' }
];

var listaVideos = document.getElementById('listaVideosArreglo');

mostrarListaVideos(videos);

function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML = '';

    videosBuscados.forEach(indiceVideo => {
        // Crear el div para la URL del video
        var fila = document.createElement('div');
        fila.setAttribute('class', 'row');

        // Columna 1: Video
        var col1UrlVideos = document.createElement('div');
        col1UrlVideos.setAttribute('class', 'col');
        
        var iframeVideo = document.createElement('iframe');
        iframeVideo.setAttribute('src', indiceVideo.url);
        iframeVideo.setAttribute('width', '400px');
        iframeVideo.setAttribute('height', '400px');
        iframeVideo.setAttribute('frameborder', '0');
        
        col1UrlVideos.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideos);

        // Columna 2: Título y descripción del video
        var col2TituloVideo = document.createElement('div');
        col2TituloVideo.setAttribute('class', 'col');

        var h4TituloVideo = document.createElement('h4');
        h4TituloVideo.textContent = indiceVideo.titulo;

        var h6DescripcionVideo = document.createElement('h6');
        h6DescripcionVideo.textContent = indiceVideo.descripcion;

        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        // Columna 3: Botón
        var col3BotonVideo = document.createElement('div');
        col3BotonVideo.setAttribute('class', 'col');

        var botonVideo = document.createElement('button');
        botonVideo.setAttribute('class', 'btn btn-outline-primary');
        botonVideo.textContent = 'Ver más';

        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);

        listaVideos.appendChild(fila);
    });
}

function BuscarVideos() {
    var textVideo = document.getElementById('txtBuscar').value;

    var videosBuscados = videos.filter(
        indiceVideo => indiceVideo.titulo.toLowerCase().includes(textVideo.toLowerCase())
    );

    mostrarListaVideos(videosBuscados);
}
