
import Swal from 'sweetalert2/dist/sweetalert2.js';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlBase: "http://localhost:5000/api",
            empresas: null,
            usuarios: null,
            usuario: null,
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
            },


            /*   postEmpresas: async (data) => {
                  try {
                      let headersContent = { 'Content-Type': 'application/json' };
                      const token = localStorage.getItem('access_token');
                      if (token) {
                          headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
                      }
                      let bodyContent = JSON.stringify(data);
  
                      let requestOptions = {
                          method: 'POST',
                          headers: headersContent,
                          body: bodyContent,
                      };
                      const resp = await fetch('http://localhost:5000/api/empresas', requestOptions)
                      const result = await resp.json()
  
                  } catch (error) {
                      console.log(error)
                  }
              },
   */

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
            getFetch: async (urlPag, data) => {
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

            postUsuario: async (data) => {
                let store = getStore()
                let formData = new FormData()
                formData.append("nombre", data.nombre);
                formData.append("apellido", data.apellido);
                formData.append("rut", data.rut);
                formData.append("rol", data.rol);
                formData.append("email", data.email);
                formData.append("password", data.password);
                formData.append("foto", data.foto);

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
                    const resp = await fetch("http://localhost:5000/api/usuarios/", requestOptions);
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
                            title: 'Usuario creado exitosamente'
                        })
                        setStore({ creacionUsuario: data, imageURL: null })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: "Algo salió mal",
                            text: result.msg
                        })

                    }
                    console.log(store)
                } catch (error) {
                    console.log(error);
                }
            },

            getDataUsuario: e => {
                const store = getStore();
                //const { creacionUsuario } = store;
                const creacionUsuario = store.creacionUsuario;
                creacionUsuario[e.target.name] = e.target.value
                setStore({ creacionUsuario: creacionUsuario })
                //setStore({creacionUsuario})
                //{ ...prevState, ...data } Esto con el state, arriba con el contextapp

            },
            getDataUsuarioFoto: e => {
                console.log(e.target.files[0])
                const store = getStore();
                //const { creacionUsuario } = store;
                const creacionUsuario = store.creacionUsuario;
                creacionUsuario[e.target.name] = e.target.files[0]

                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onloadend = function (e) {
                    setStore({ creacionUsuario: creacionUsuario, imageURL: [reader.result] })
                };
                setStore({ creacionUsuario: creacionUsuario })
                //{ ...prevState, ...data } Esto con el state, arriba con el contextapp
            },

            enviarFormulario: e => {
                e.preventDefault();
                const store = getStore();
                getActions().postUsuario(store.creacionUsuario);
            },

            /* Zona PUT */
            putUsuario: async (urlPag, setInfo, data_a_enviar) => {


                let store = getStore()
                let formData = new FormData()
                /* Probar cambiando todos los append por variables = formData.get("algo") y luego pasarla por el body como json/string */

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
                    console.log("resp", resp)
                    const result = await resp.json();
                    console.log(result)
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
            deleteFetch: async (urlPag, setInfo, mensajeAlerta) => {
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
                    const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
                    const result = await resp.json();
                    console.log(resp)
                    if (resp.status == 200) {
                        Swal.fire({
                            icon: 'success',
                            title: mensajeAlerta + ' eliminada exitosamente.'
                        })

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




        }
    }
}
export default getState;