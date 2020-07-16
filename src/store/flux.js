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

        }
    }
}

export default getState;