
import Swal from 'sweetalert2/dist/sweetalert2.js';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            loadedToken: null,
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
            imageURL: null

        },
        actions: {

            getEmpresas: async url => {
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
                    const resp = await fetch("http://localhost:5000/api/empresas", requestOptions);
                    const result = await resp.json();

                    setStore({
                        empresas: result,
                    })
                } catch (error) {
                    console.log(error)
                }
            },

            postEmpresas: async (data) => {
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

            // metodo para taer token desde localStorage y almacenarlo en flux
            loadFromLocalStorage: () => {
                const token = localStorage.getItem('access_token')
                setStore({
                    loadedToken: token,
                })
            },
            /* Zona Usuarios */
            getUsuarios: async url => {
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
                    const resp = await fetch('http://localhost:5000/api/usuarios/', requestOptions)
                    const result = await resp.json()
                    setStore({
                        usuarios: result
                    })

                } catch (error) {
                    console.log(error)
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
                            title: "Algo salio mal",
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


            /* /Zona Usuarios */


        }
    }
}
export default getState;