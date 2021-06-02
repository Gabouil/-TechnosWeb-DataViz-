new Vue({
    el: "#mon_app",
    data: {
        timeBar : 0,
    },
    computed: {
        JS : function(){
            if( this.timeBar == 1){
                return {
                    bottom : "15%",
                    left : "20%"
                }
            }
            if( this.timeBar == 2){
                return {
                    bottom : "35%",
                    left : "30%"
                }
            }
            if( this.timeBar == 3){
                return {
                    bottom : "35%",
                    left : "45%"
                }
            }
            if( this.timeBar == 4){
                return {
                    bottom : "45%",
                    left : "60%"
                }
            }
            if( this.timeBar == 5){
                return {
                    bottom : "85%",
                    left : "60%"
                }
            }
        },
        HTML : function(){
            if( this.timeBar == 1){
                return {
                    bottom : "50%",
                    left : "30%"
                }
            }
            if( this.timeBar == 2){
                return {
                    bottom : "80%",
                    left : "50%"
                }
            }
            if( this.timeBar == 3){
                return {
                    bottom : "90%",
                    left : "75%"
                }
            }
            if( this.timeBar == 4){
                return {
                    bottom : "100%",
                    left : "90%"
                }
            }
            if( this.timeBar == 5){
                return {
                    bottom : "100%",
                    left : "100%"
                }
            }
        }
    }
})
