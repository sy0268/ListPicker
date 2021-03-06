import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    position: "bottom-center",
    duration: 3000
    })

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Success! Everything went well.' : payload.msg,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops... Something went wrong.' : payload.msg,
    { type: 'error', icon: 'times' }
)