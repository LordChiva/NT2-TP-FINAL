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
            butacas:null,
            combos: null,
            butacasSeleccionadas:[]

        },

        mutations: {
            //addAmigo(state) {
            //    state.amigos =[state.amigo,...state.amigos]
            //},
            arregarPeli(state, payload) {
                state.pelicula = payload;                        
            },
            arregarF(state, payload) {
                state.fecha = payload;                        
            },
            arregarButaca(state, payload) {
                state.fecha = payload;                        
            },
            arregarCombo(state, payload) {
                state.fecha = payload;                        
            },
        },

        actions: {
            //addAmigoAction(context) {
           //    context.commit('addAmigo');
           // },
            arregarPelicula({ commit }, payload) {
                commit('arregarPeli', payload);
            },
            arregarFecha({ commit }, payload) {
                commit('arregarF', payload);
            },
            arregarButacas({ commit }, payload) {
                commit('arregarButaca', payload);
            },
            arregarCombos({ commit }, payload) {
                commit('arregarButaca', payload);
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
            }
        }        
    }
)