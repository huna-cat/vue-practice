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
