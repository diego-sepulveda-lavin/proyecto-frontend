import React, { useState, useEffect } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));

        useEffect(() => {
            if (state.store.usuarioActivo !== null) {
                state.actions.getFetch("/usuarios", "usuarios");
                state.actions.getFetch("/empresas", "empresas");
                state.actions.getFetch("/categorias", "categorias");
                state.actions.getFetch("/productos", "productos");
                state.actions.getFetch("/proveedores", "proveedores");
                state.actions.getFetch("/facturas-compras", "facturas");
            }

            /*             state.actions.getFetch("/entradas-inventario", "entradaStock");
                        state.actions.getFetch("/salidas-inventario", "ventaProductos"); */
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )

    }
    return StoreWrapper;
}

export default injectContext;