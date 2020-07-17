const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            empresas: null,
            usuarios:null,
            usuario:null,
            
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
            }

        }
    }
}

export default getState;