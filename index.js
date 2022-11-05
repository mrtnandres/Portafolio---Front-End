


async function obtenerDatos()
{
    const respuesta = await fetch('https://127.0.0.1:5500/registros.json');
    const json = await respuesta.text();

    console.log(json.nombre);
}

obtenerDatos();