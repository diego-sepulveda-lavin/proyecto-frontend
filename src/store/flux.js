const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            empresas: null,
            usuarios: null,
            usuario: null,
            loadedToken: null,

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
                    let headersContent = { 'Content-Type': 'application/json' };
                    const token = localStorage.getItem('access_token');
                    if (token){
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
                    console.log(result)
                    /*  setMensaje(result.msg) */
                } catch (error) {
                    console.log(error)
                }
            },

            getUsuarios: async url => {
                const resp = await fetch("http://localhost:5000/api/usuarios/");
                const data = await resp.json();
                setStore({
                    usuarios: data
                })
            },
            // metodo para taer token desde localStorage y almacenarlo en flux
            loadFromLocalStorage: () => {
                const token = localStorage.getItem('access_token')
                setStore({
                    loadedToken: token,
                })
            }
        }
    }
}
export default getState;