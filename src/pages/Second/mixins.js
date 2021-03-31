export default {
    mounted() {
        console.log('mixin - mounted ')
    },
    methods: {
        click(name) {
            window.alert(name)
        }
    },
    filters: {
        separateNum: function (number) {
            if (number % 2 !== 0) {
                return number
            } else {
                return number
            }
        }
    }
}
