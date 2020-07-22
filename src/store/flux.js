
import Swal from 'sweetalert2/dist/sweetalert2.js';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlBase: "http://localhost:5000/api",
            empresas: null,
            usuarios: null,
            categorias: null,
            productos: null,
            proveedores: null,
            usuarioActivo: null,
            creacionUsuario: {
                nombre: "",
                apellido: "",
                rut: "",
                email: "",
                rol: "",
                password: "",
                repassword: "",
                foto: "",
            },
            imageURL: null,
            MensajesRecibidos: []

        },
        actions: {
            validaLogin: (props) => {
                if (!localStorage.getItem('access_token')) {
                    props.history.push("/login");
                }
                setStore({usuarioActivo:JSON.parse(localStorage.getItem('user'))})
            },



            /* Zona GET */
            getFetchID: async (urlPag, setInfo, data) => {
                let store = getStore()
                try {
                    let headersContent = { 'Content-Type': 'application/json' };
                    const token = localStorage.getItem('access_token');
                    if (token) {
                        headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    }
                    let requestOptions = {
                        method: 'GET',
                        headers: headersContent
                    };
                    const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
                    const result = await resp.json();
                    setInfo({
                        [data]: result
                    })

                } catch (error) {
                    console.log(error);
                }
            },
            getFetch: async (urlPag, data = "") => {
                let store = getStore()
                try {
                    let headersContent = { 'Content-Type': 'application/json' };
                    const token = localStorage.getItem('access_token');
                    if (token) {
                        headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    }
                    let requestOptions = {
                        method: 'GET',
                        headers: headersContent
                    };
                    const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
                    const result = await resp.json();
                    setStore({
                        [data]: result
                    })
                } catch (error) {
                    console.log(error);
                }
            },

            postUsuario: async (urlPag, data_a_enviar, limpiarInput, mensajeAlerta) => {
                let store = getStore()
                let formData = new FormData()
                formData.append("nombre", data_a_enviar.nombre);
                formData.append("apellido", data_a_enviar.apellido);
                formData.append("rut", data_a_enviar.rut);
                formData.append("rol", data_a_enviar.rol);
                formData.append("email", data_a_enviar.email);
                formData.append("password", data_a_enviar.password);
                formData.append("foto", data_a_enviar.foto);
                let validaPass = getActions().validaPassword(data_a_enviar.password, data_a_enviar.repassword)
                if (validaPass != false) {

                    try {
                        let headersContent = ""
                        const token = localStorage.getItem('access_token');
                        if (token) {
                            headersContent = { 'Authorization': 'Bearer ' + token }
                        }
                        let requestOptions = {
                            method: 'POST',
                            headers: headersContent,
                            body: formData,
                        };
                        const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions);
                        const result = await resp.json();
                        if (result.msg == null) {
                            let data = {
                                nombre: "",
                                apellido: "",
                                rut: "",
                                email: "",
                                rol: "",
                                password: "",
                                repassword: "",
                                foto: ""
                            }
                            Swal.fire({
                                icon: 'success',
                                title: `${mensajeAlerta} creado exitosamente`
                            })
                            /* data_a_enviar = "" */
                            limpiarInput({ state: data, imageURL: null })
                            getActions().getFetch("/usuarios", "usuarios");
                            //setStore({ creacionUsuario: data, imageURL: null })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: "Algo salió mal",
                                text: result.msg
                            })
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            },

            /* Zona PUT */
            putUsuario: async (urlPag, setInfo, data_a_enviar) => {

                let store = getStore()
                let formData = new FormData()
                formData.append("nombre", data_a_enviar.nombre);
                formData.append("apellido", data_a_enviar.apellido);
                formData.append("rut", data_a_enviar.rut);
                formData.append("rol", data_a_enviar.rol);
                formData.append("email", data_a_enviar.email);
                formData.append("password", data_a_enviar.password);
                formData.append("foto", data_a_enviar.foto);

                try {
                    let headersContent = ""
                    const token = localStorage.getItem('access_token');
                    if (token) {
                        headersContent = {
                            "Access-Control-Allow-Origin": "*",
                            'Authorization': 'Bearer ' + token,
                        }
                    }
                    let requestOptions = {
                        method: 'PUT',
                        headers: headersContent,
                        body: formData,
                    };

                    const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
                    const result = await resp.json();
                    if (result.msg == null) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario Modificado exitosamente.'
                        })
                        setInfo({
                            "msg": result.msg,
                            "usuario": result
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: "Algo salió mal",
                            text: result.msg
                        })

                    }

                } catch (error) {
                    console.log(error);
                }
            },
            putFetch: async (urlPag, setInfo, data_a_enviar) => {
                let store = getStore()

                try {
                    let headersContent = { 'Content-Type': 'application/json' };
                    const token = localStorage.getItem('access_token');
                    if (token) {
                        headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    }
                    let requestOptions = {
                        method: 'PUT',
                        headers: headersContent,
                        body: JSON.stringify(data_a_enviar)
                    };
                    const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
                    const result = await resp.json();
                    if (!result.msg) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Empresa modificada exitosamente.'
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Algo salió mal.',
                            text: result.msg
                        })
                    }
                    setInfo({

                        "msg": result.msg,
                        "empresa": result
                    })

                } catch (error) {
                    console.log(error);
                }
            },
            /* /Zona PUT */

            /* Zona DELETE */
            deleteFetch: async (urlPag, id, setInfo, mensajeAlerta, data) => {
                let store = getStore()

                try {
                    let headersContent = { 'Content-Type': 'application/json' };
                    const token = localStorage.getItem('access_token');
                    if (token) {
                        headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    }
                    let requestOptions = {
                        method: 'DELETE',
                        headers: headersContent
                    };
                    const resp = await fetch(`${store.urlBase}${urlPag}/${id}`, requestOptions)

                    const result = await resp.json();
                    console.log(resp)
                    if (resp.status == 200) {
                        Swal.fire({
                            icon: 'success',
                            title: mensajeAlerta + ' eliminada exitosamente.'
                        })
                        getActions().getFetch(`${urlPag}`, data);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Algo salió mal',
                            text: result.msg
                        })
                        setInfo({
                            "msg": result.msg,
                        })
                    }

                } catch (error) {
                    console.log(error);
                }
            },
            /* /Zona DELETE */

            /* Zona POST*/
            postFetch: async (urlPag, data_a_enviar, limpiarInput, mensajeAlerta) => {
                let store = getStore()
                try {
                    let headersContent = { 'Content-Type': 'application/json' };
                    const token = localStorage.getItem('access_token');
                    if (token) {
                        headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                    }
                    let requestOptions = {
                        method: 'POST',
                        headers: headersContent,
                        body: JSON.stringify(data_a_enviar)
                    };
                    const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
                    const result = await resp.json();
                    console.log(resp)
                    if (!result.msg) {
                        Swal.fire({
                            icon: 'success',
                            title: mensajeAlerta + ' creada exitosamente.'
                        })
                        data_a_enviar = ""
                        limpiarInput(data_a_enviar)
                        //getActions().getFetch()
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Algo salió mal.',
                            text: result.msg
                        })
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            /* /Zona POST */
            /* Zona Valida */
            validaPassword: (password1, password2) => {
                if (password1 !== password2) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Contraseñas deben ser la misma.',
                    })
                    return false;
                }

            },
            validaCategoria: (categoria_id) => {
                let store = getStore()
                /*let nombre_categoria = store.categorias.filter((categoria) => {
                    return categoria.id === categoria_id
                })
                return nombre_categoria[0].nombre */

                let a= store.categorias.filter((categoria) => {
                    return categoria.id === categoria_id
                }).map(categ => {
                    return categ.nombre
                })
                return a;
                
            },
            validaProducto: (id) => {
                console.log("aaaaaaaaaaaaa")
                console.log("AAAAAAAAAAAAAA")
                console.log(id)
             
                
            },
            usuarioAuth: (usuario) => {
                setStore({usuarioActivo:usuario})

            },
                
            
            /* /Zona Valida */



        }
    }
}
export default getState;