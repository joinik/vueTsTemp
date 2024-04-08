import { defineStore } from "pinia";

const useUserStore = defineStore('user', {
    state: () =>{
        return {
            name: 'jk'
        }
    },
    // other options
})

export default useUserStore;