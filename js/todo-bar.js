class TodoHeader {
    constructor() {
        this.color = "red";
        this.title = ""
    }
}

class TodoItem {
    constructor() {
        this.title = 'input title';
        this.date = new Date();
        this.text = 'overview';
    }

    showTodoInfo() {
        infoOverView.enable(this);
    }
}

var todoBar = new Vue({
    el: '.todo-bar', 
    data : {
        header : new TodoHeader(),
        todoItems : []
    },
    methods : {
        addNewTodo : function() {
            this.todoItems.push(new TodoItem());
        },
        removeTodo : function(idx) {
            this.todoItems.splice(idx, 1);
        },
        showTodoInfo : function(idx) {
            this.todoItems[idx].showTodoInfo();
        }
    }
});
