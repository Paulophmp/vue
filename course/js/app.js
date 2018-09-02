var hello = new Vue({
    el: '#hello',
    data: {
        msg:"Hello Vue!",
        peoples:[
            {name: "Davi Gabriel"},
            {name: "Ana Clara"},
            {name: "Kauan Henrique"},
            {name: "Alexssandra"}
        ],
        newElement: '',
        elements: [],
        objectA:{
            'font-size':'125px'
        },
        objectB: {
            color:'red'
        }
    },
    methods:{
        addElement: function () {
            var title = this.newElement.trim();
            if (title){
                this.elements.push({title:title});
                this.newElement = '';
            }
        },
        removeElement: function (e, index) {
            e.preventDefault();
            this.elements.splice(index, 1);
        },
        myClick: function () {
            alert('click');
        },
        myKeyUp: function () {
            alert('myKeyUp');
        }
    }
});