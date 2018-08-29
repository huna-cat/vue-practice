var infoOverView = new Vue({
    el : "#todoInfoLayer",
    data : {
        isActive : false,
        title : null,
        date : null,
        text : null
    },
    methods : {
        enable : function(todoItem) {
            this.isActive = true;
            this.title = todoItem.title;
            this.date = todoItem.date;
            this.text = todoItem.text;
        },
        remove  : function() {
            this.isActive = false;
            this.title = "";
            this.date = "";
            this.text = "";
        }
    }
});