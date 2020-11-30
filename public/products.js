"use strict";
const $quagenda = document.querySelector('#quagenda');

function crearCards(arr) {
    arr.forEach((producto) => { // -------CARDS-----------
        const $div = document.createElement('div');
        $div.setAttribute('id', producto['id'])
        $div.setAttribute('class', 'cards', 'prod__cards');
        $div.classList.add('prod__cards');

        // CONTENEDOR FOTO Y ANCLA
        const $divFoto = document.createElement('div');
        $divFoto.className = 'cards__fotoPpal';

        // Etiqueta ancla para que abra el modal
        const $linkFoto = document.createElement('a');
        $linkFoto.className = 'cards__link';
        $linkFoto.setAttribute('data-target', '#');

        // IMAGEN-------------------
        const $img = document.createElement('img');
        $img.className = 'cards__img';
        $img.setAttribute('src', producto['img'].img);

        // TITULOS Y TXTS----------------
        const $txt = document.createElement('div');
        $txt.className = 'cards__txt';

        const $titulo = document.createElement('div')
        $titulo.className = 'cards__titulo';

        const $h4 = document.createElement('div')
        $h4.className = 'cards__titulo__h4';
        $h4.textContent = `${
            producto.nombre
        }`;

        const $autor = document.createElement('div')
        $autor.className = 'cards__autor';

        const $h5 = document.createElement('div')
        $h5.className = 'cards__autor__h5';
        $h5.innerHTML = `<strong>Arte de tapa: </strong> ${
            producto.autor
        }`;
        const $cat = document.createElement('div')
        $cat.className = 'cards__autor__h5';
        $cat.innerHTML = `${
            producto.categoria
        }`;

        // PRECIOS--------
        const $dinero = document.createElement('div');
        $dinero.className = 'cards__precio';

        const $oferta = document.createElement('div');
        $oferta.className = 'cards__precio--tachado'
        $oferta.textContent = `${
            producto.oferta
        }`;

        const $precio = document.createElement('div');
        $precio.className = 'cards__precio cards__precio-precio';
        $precio.textContent = `${
            producto.precio
        }`;

        // BUTTONS------------
        const $buttons = document.createElement('div');
        $buttons.className = 'btn-flexbox'

        const $btnVerMas = document.createElement('button');
        $btnVerMas.className = 'btn btn__modal';
        $btnVerMas.textContent = 'Ver más!';
        setAttributes($btnVerMas, {
            'type': 'button',
            'data-toggle': "modal",
            'data-target': `#exampleModal${
                producto['id']
            }`,
            'onclick': "openModal()"
        })

        const $btnCarrito = document.createElement('button');
        $btnCarrito.className = 'btn btn__modal addToCart'; // Ya tiene un Event Listener asignado
        setAttributes($btnCarrito, {
            'type': 'button',
            'marcador': producto['id']
        })

        const $iconoCarrito = document.createElement('i');
        $iconoCarrito.className = 'fas fa-shopping-cart';

        // PRE-VENTA-------------
        const $preVta = document.createElement('div');
        $preVta.className = 'preventa';


        const $iconoPreVta = document.createElement('span')
        $iconoPreVta.className = 'preventa-txt';
        $iconoPreVta.textContent = 'pre venta'

        // ----Agrego cada hijo  a su padre-----
        $linkFoto.appendChild($img);
        $divFoto.appendChild($linkFoto);


        $titulo.appendChild($h4);
        $txt.appendChild($titulo);
        $autor.appendChild($h5);
        $autor.appendChild($cat);
        $txt.appendChild($autor);
        $dinero.appendChild($oferta);
        $dinero.appendChild($precio);

        $buttons.appendChild($btnVerMas);
        $btnCarrito.appendChild($iconoCarrito);
        $buttons.appendChild($btnCarrito);

        $preVta.appendChild($iconoPreVta);

        $div.appendChild($divFoto);
        $div.appendChild($txt);
        $div.appendChild($dinero);
        $div.appendChild($buttons);
        $div.appendChild($preVta);
        $quagenda.appendChild($div);
    });

}; // (IIFE) Inmediatle Invoke Funtion expression


function openModal() {
    data.forEach((producto) => {
        const $modal = document.createElement('div');
        $modal.className = ' modal fade';
        setAttributes($modal, {
                'id': `exampleModal${
                producto['id']
            }`,

            'tabindex': '-1',
            'aria-labelledby': 'exampleModalLabel',
            'aria-hidden': "true"
        })

        const $modalBody = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <img class="modal-logo" src="images/Logo-web-AM.svg" alt="logo">
                <button type="button" class="close" data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
            </div>
            <div class="modal-body">
                <div id="carouselExampleIndicators${
            producto['id']
        }" class= "carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li class="bg-img bg-img-${
            producto['id']
        }-1 active" data-target="#carouselExampleIndicators${
            producto['id']
        }" data-slide-to="0" ></li>
                        <li class="bg-img bg-img-${
            producto['id']
        }-2" data-target="#carouselExampleIndicators${
            producto['id']
        }" data-slide-to="1">
                        </li>
                        <li class="bg-img bg-img-${
            producto['id']
        }-3" data-target="#carouselExampleIndicators${
            producto['id']
        }" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${
            producto['img'].img2
        }" class="d-block w-100" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="${
            producto['img'].img3
        }" class = "d-block w-100" alt = "" >
                        </div>
                        <div class="carousel-item">
                            <img src= "${
            producto['img'].img4
        }" class="d-block w-100" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-footer__caract">
                    <div class="modal-footer__caract__titulo">
                        <strong>CARACTER&Iacute;STICAS</strong>
                    </div>
                    <ul class="modal-footer__caract__list">
                        <li class="card__caract__item">
                            <strong>Tama&ntilde;o:&nbsp;</strong>${
            producto['caracteristicas'].tamanio
        }
                        </li>
                        <li class="modal-footer__caract__item">
                            <strong>Interior:&nbsp;</strong>${
            producto['caracteristicas'].interior
        }</li>
                        <li class="modal-footer__caract__item">
                            <strong>Encuadernacion:&nbsp;</strong>${
            producto['caracteristicas'].encuadernacion
        }</li>
                        <li class="modal-footer__caract__item">
                            <strong>Papel:&nbsp;</strong>${
            producto['caracteristicas'].papel
        }</li>
                        <li class="modal-footer__caract__item cards__precio--modal">
                            AR$ ${
            producto['precio']
        }</li>
                    </ul>
                </div>
                <button type = "button"  class = "btn btn__modal addToCart"
                    data - toggle = "modal" data - target = "#cart" >
                    <i class="fas fa-shopping-cart"></i>
                    <h4 class="agregar">Comprar</h4> 
                </button>

            </div>
        </div>
    </div>`;

        $modal.innerHTML = $modalBody;
        const contenedor = document.getElementById(`${
            producto.id
        }`)
        contenedor.appendChild($modal)

    });
};

function setAttributes(elem, attrs) { // para ingresar mas de un atributofunction
    for (var key in attrs) {
        elem.setAttribute(key, attrs[key]);
    }
};
