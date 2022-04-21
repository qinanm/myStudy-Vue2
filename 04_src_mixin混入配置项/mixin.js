export const mixin = {
    methods: {
        ariseAlert() {
            alert(this.name)
        }
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
    mounted() {
        console.log('你好呀 柒楠')
    },
}