import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            pelicula:null,
            fecha: null,
            butacas: null,
            combos: null,
            precioTotalcombos: null,
            usuario: null,
            

        },

        mutations: {
            agregarPeli(state, payload) {
                state.pelicula = payload;                        
            },
            agregarF(state, payload) {
                state.fecha = payload;                        
            },
            agregarButaca(state, payload) {
                state.butacas = payload;                        
            },
            agregarCombo(state, payload) {
                state.combos = payload;                        
            },
            agregarUsuario(state, payload) {
                state.usuario = payload;                        
            },
            agregarPrecioTotalcombos(state, payload) {
                state.precioTotalcombos = payload;                        
            },
        },

        actions: {
            agregarPelicula({ commit }, payload) {
                commit('agregarPeli', payload);
            },
            agregarFecha({ commit }, payload) {
                commit('agregarF', payload);
            },
            agregarButacas({ commit }, payload) {
                commit('agregarButaca', payload);
            },
            agregarCombos({ commit }, payload) {
                commit('agregarCombo', payload);
            },
            agregarUsuario({ commit }, payload) {
                commit('agregarUsuario', payload);
            },
            agregarPrecioTotalcombos({ commit }, payload) {
                commit('agregarPrecioTotalcombos', payload);
            },
        },
        
        getters: {            
            pelicula(state) {
                return state.pelicula;
            },
            fecha(state) {
                return state.fecha;
            },
            butacas(state) {
                return state.butacas;
            },
            combos(state) {
                return state.combos;
            },
            usuario(state) {
                return state.usuario;
            },
            precioTotalcombos(state) {
                return state.precioTotalcombos;
            },
        }        
    }
)