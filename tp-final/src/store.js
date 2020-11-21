import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state: {
            //msg: 'Archivo store.js Holi',
            //nombre:'seba',
            //apellido: 'Felice',
           // amigos: [],
            //amigo:null,
            pelicula:null,
            fecha: null,
            butacas: null,
            combos: null,
            usuario: null,
            

        },

        mutations: {
            //addAmigo(state) {
            //    state.amigos =[state.amigo,...state.amigos]
            //},
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
        },

        actions: {
            //addAmigoAction(context) {
           //    context.commit('addAmigo');
           // },
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
        },
        
        getters: {            
           // mensaje(state) {
          //      return state.msg;
          //  },
          //  nombreCompleto(state) {
         //       return`${state.nombre} ${state.apellido}`
          //  },
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
        }        
    }
)