var navBar = new Vue({
    el : "#navbar",
    data : {
        title : "Todo's",
        count : 0
    },
    methods : {
        createNewTodoBar : function() {
            console.log(this.count++)
        }
    }
})
