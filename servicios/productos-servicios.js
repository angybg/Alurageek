const listaProductos = () =>
    fetch('http://localhost:3000/productos')
        .then(respuesta => respuesta.json());

const crearProducto = (imageUrl, name, price, categoria, description) => {
    return fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            description,
            id: uuid.v4()
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un producto')
        });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((resp) => resp.json());
};

const deleteItem = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
    });
};

const updateItem = (imageUrl, name, price, categoria, description, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            description,
        })
    })
        .then(response => response)
        .catch(error => console.error(error))
};

export const productosServicios = {
    listaProductos,
    crearProducto,
    detalleProducto,
    updateItem,
    deleteItem,
};