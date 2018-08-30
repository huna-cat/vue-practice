Vue.component('bar-header', {
    props : ['title'],
    template :
        '<div class="bar-header">\
            <div contenteditable="true" class="todo-bar-title">\
                <span class="align-middle">{{ title }}</span>\
            </div>\
        </div>'
})

Vue.component('bar-body', {
    data : function() {
        return {
            idx : 0,
            todos : []
        }
    }, 
    template : 
        '<div class="bar-body">\
            <todo-item v-for="(todo, idx) in todos" v-bind:key=idx v-bind:idx="idx" v-bind:title="todo.title" v-on:remove="remove" v-on:show="show"></todo-item>\
            <todo-item-add v-on:add="add"></todo-item-add>\
        </div>',
    methods : {
        remove : function(idx) {
            this.todos.splice(idx, 1)
        },
        show : function (idx) {
            window.alert("show" + idx)
        },
        add : function() {
            this.todos.push({
                idx : this.idx,
                title : "title " + this.idx 
            })
            this.idx++;
        }
    }
})

Vue.component('todo-bar', {
    props : [],
    data : function() {
        return {
            title : "component"
        }
    },
    template : 
        '<div class="todo-bar col-sm-3">\
            <bar-header v-bind:title="title"></bar-header>\
            <bar-body></bar-body>\
        </div>'
})
