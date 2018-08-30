Vue.component('item-header', {
    props : ['idx'],
    template : 
        '<div class="item-header">\
            <span class="todo-icon todo-number">{{ idx + 1 }}</span>\
            <!-- 削除ボタン -->\
            <i class="fas fa-trash-alt todo-icon todo-remove" v-on:click="$emit(\'remove\', idx)"></i>\
            <!-- インフォメーションボタン -->\
            <i class="fas fa-info todo-icon todo-unfold" v-on:click="$emit(\'show\', idx)"></i>\
        </div>'
})

Vue.component('item-body', {
    props :['title'],
    template :
        '<!-- テキストエリア -->\
        <div class="item-body">\
            <div contenteditable="true" class="todo-text">\
                <span class="align-middle">{{ title }}</span>\
            </div>\
        </div>'
})

Vue.component('todo-item', {
    props : ['idx', 'title'],
    template : 
        '<div class="todo-item">\
            <item-header v-bind:idx="idx" v-on:remove="$emit(\'remove\', idx)" v-on:show="$emit(\'show\', idx)"></item-header>\
            <item-body v-bind:title="title"></item-body>\
        </div>'
})

Vue.component('todo-item-add', {
    props : [],
    template : 
        '<div class="todo-add">\
            <i class="fas fa-plus fa-lg" v-on:click="$emit(\'add\')"></i>\
        </div>'
})

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

var main = new Vue({
    el : "#main",
    data : {
        idx : 0,
        bars : []
    },
    methods : {
        add : function() {
            this.bars.push({
                idx : this.idx
            })
            this.idx++;
        }
    }
})

var navBar = new Vue({
    el : "#navbar",
    data : {
        title : "Todo's",
        count : 0
    },
    methods : {
        createNewTodoBar : function() {
            main.add();
        }
    }
})
