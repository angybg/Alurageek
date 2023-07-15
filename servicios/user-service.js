const listaUsuarios = () =>
    fetch('http://localhost:3000/users').then(respuesta => respuesta.json());

const crearUsuario = (name, email, password) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            id: uuid.v4()
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un usuario')
        });
};

const detalleUsuario = (id) => {
    return fetch(`http://localhost:3000/users/${id}`).then((resp) => resp.json());
};

const deleteUser = (id) => {
    return fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
    });
};

const updateUsuario = (name, email, password, id) => {
    return fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
        .then(response => response)
        .catch(error => console.error(error))
};

export const userServicios = {
    listaUsuarios,
    crearUsuario,
    deleteUser,
    detalleUsuario,
    updateUsuario,
}

