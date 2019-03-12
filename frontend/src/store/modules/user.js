import axios from 'axios'

import { baseApiUrl } from '@/global'
export default {
    strict: true,
    state: {
        data: {},
        step: 0,
        mode: 'save',
        fileUrl: '',
        showPreview: false
    },
    mutations: {
        nextStep(state) {
            state.step++
        },
        resetStep(state) {
            state.step = 1
        },
        resetAll(state) {
            state.data = {}
            state.step = 0
        }
    },
    getters: {
        stepNumber(state) {
            return state.step
        }
    },
    actions: {
        save({commit, state}, router ) {
            const method = state.data.id ? 'put' : 'post'
            const id = state.data.id ? `/${state.data.id}` : ''
            axios[method](`${baseApiUrl}/users/${id}`, state.data)
            .then(() => {
                commit('activeSnackbar', 'Success! User registered.', { root: true })
                commit('resetAll')
                router.push('/')
            })
            .catch(err => {
                let error
                if(err.response.data) {
                    error = err.response.data
                } else {
                    error = err
                }
                
                commit('activeSnackbar', error, { root: true })
            })
        }
    }
}