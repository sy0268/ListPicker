import Vue from 'vue'
export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaulError({ msg: e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaulError({ msg : e })
    } else {
        Vue.toasted.global.defaulError()
    }
}

export default { baseApiUrl, showError }