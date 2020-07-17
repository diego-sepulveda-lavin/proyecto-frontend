
import Swal from 'sweetalert2/dist/sweetalert2.js';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            empresas: null,
            usuarios: null,
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
                const resp = await fetch("http://localhost:5000/api/empresas");
                const data = await resp.json();
                console.log(data);
                setStore({
                    empresas: data,
                })
            },

            postEmpresas: async (data) => {
                try {
                    let bodyContent = JSON.stringify(data);
                    let requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: bodyContent,
                    };
                    const resp = await fetch('http://localhost:5000/api/empresas', requestOptions)
                    const result = await resp.json()
                    console.log(result)
                    /*  setMensaje(result.msg) */
                } catch (error) {
                    console.log(error)
                }
            },

            /* Zona Usuarios */
            getUsuarios: async url => {
                const resp = await fetch("http://localhost:5000/api/usuarios/");
                const data = await resp.json();
                setStore({
                    usuarios: data
                })
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
                    let requestOptions = {
                        method: 'POST',
                        //headers: { 'Content-Type': 'multipart/form-data' },
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