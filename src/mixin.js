export const mixin = {

    methods : {
        foo: function () {
            console.log('foo')
        },
        conflicting : function () {
            console.log('from mixin')
        }
    },
    created() {
        this.foo()
    }
}

