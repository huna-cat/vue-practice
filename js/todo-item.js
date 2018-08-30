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