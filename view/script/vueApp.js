
new Vue({
    el: "#mon_app",
    data: {
        timeBar : 1,
        bottom : [],
        left : [],
        coef : 80
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            var ourResquest = new XMLHttpRequest()
            ourResquest.open('GET', "https://datavisual1.000webhostapp.com/api_test/api/info/lecture.php")
            ourResquest.onload = () => {
                var ourData = JSON.parse(ourResquest.responseText)
                ourData = ourData['data']
                this.left = []
                this.bottom = []
                if(this.timeBar == 1) {
                    ourData.forEach(data => {
                        this.left.push(Number(50 + data["croissance_decroissance_2004"]/2))

                        if(data["totale_users_year_2004"] <= 1000000) {
                            this.bottom.push(Number((50 * data["totale_users_year_2004"])/1000000))
                        } else if(data["totale_users_year_2004"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2004"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }else if(this.timeBar == 2) {
                    ourData.forEach(data => {
                        this.left.push(Number(50 + data["croissance_decroissance_2012"]/2))

                        if(data["totale_users_year_2012"] <= 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2012"])/1000000))
                        } else if(data["totale_users_year_2012"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2012"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }else if(this.timeBar == 3) {
                    ourData.forEach(data => {
                        this.left.push(Number(50 + data["croissance_decroissance_2017"]/2))

                        if(data["totale_users_year_2017"] <= 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2017"])/1000000))
                        } else if(data["totale_users_year_2017"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2017"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }else if(this.timeBar == 4) {
                    ourData.forEach(data => {
                        this.left.push(Number(50 + data["croissance_decroissance_2020"]/2))

                        if(data["totale_users_year_2020"] < 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2020"])/1000000))
                        } else if(data["totale_users_year_2020"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2020"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }
                console.log(this.bottom)
            }
            ourResquest.send()
        }
    },
    computed: {
        // langage
        // front
        css : function(){
            return {
                bottom : this.bottom[0] + "%",
                left : this.left[0] + "%"
            }
        },
        c : function(){
            return {
                bottom : this.bottom[1] + "%",
                left : this.left[1] + "%"
            }
        },
        cpp : function(){
            return {
                bottom : this.bottom[2] + "%",
                left : this.left[2] + "%"
            }
        },
        // back
        python : function(){
            return {
                bottom : this.bottom[3] + "%",
                left : this.left[3] + "%"
            }
        },
        php : function(){
            return {
                bottom : this.bottom[4] + "%",
                left : this.left[4] + "%"
            }
        },
        java : function(){
            return {
                bottom : this.bottom[5] + "%",
                left : this.left[5] + "%"
            }
        },
        ruby : function(){
            return {
                bottom : this.bottom[6] + "%",
                left : this.left[6] + "%"
            }
        },
        sql : function(){
            return {
                bottom : this.bottom[7] + "%",
                left : this.left[7] + "%"
            }
        },
        csh : function(){
            return {
                bottom : this.bottom[8] + "%",
                left : this.left[8] + "%"
            }
        },

        // front/back
        javaScript : function(){
            return {
                bottom : this.bottom[9] + "%",
                left : this.left[9] + "%"
            }
        },
        typeScript : function(){
            return {
                bottom : this.bottom[10] + "%",
                left : this.left[10] + "%"
            }
        },
        objectivec : function(){
            return {
                bottom : this.bottom[11] + "%",
                left : this.left[11] + "%"
            }
        },
        kotlin : function(){
            return {
                bottom : this.bottom[12] + "%",
                left : this.left[12] + "%"
            }
        },
        // Frameworks
        // Front
        reactjs : function(){
            return {
                bottom : this.bottom[13] + "%",
                left : this.left[13] + "%"
            }
        },
        reactNatif : function(){
            return {
                bottom : this.bottom[14] + "%",
                left : this.left[14] + "%"
            }
        },
        angularJS : function(){
            return {
                bottom : this.bottom[15] + "%",
                left : this.left[15] + "%"
            }
        },
        angular : function(){
            return {
                bottom : this.bottom[16] + "%",
                left : this.left[16] + "%"
            }
        },
        vue : function(){
            return {
                bottom : this.bottom[17] + "%",
                left : this.left[17] + "%"
            }
        },
        bootstrap : function(){
            return {
                bottom : this.bottom[18] + "%",
                left : this.left[18] + "%"
            }
        },
        tailwind : function(){
            return {
                bottom : this.bottom[19] + "%",
                left : this.left[19] + "%"
            }
        },
        // back
        laravel : function(){
            return {
                bottom : this.bottom[20] + "%",
                left : this.left[20] + "%"
            }
        },
        symphony : function(){
            return {
                bottom : this.bottom[21] + "%",
                left : this.left[21] + "%"
            }
        },
        rails : function(){
            return {
                bottom : this.bottom[22] + "%",
                left : this.left[22] + "%"
            }
        },
        django : function(){
            return {
                bottom : this.bottom[23] + "%",
                left : this.left[23] + "%"
            }
        },
        flask : function(){
            return {
                bottom : this.bottom[24] + "%",
                left : this.left[24] + "%"
            }
        },
        cakePHP : function(){
            return {
                bottom : this.bottom[25] + "%",
                left : this.left[25] + "%"
            }
        },
        // front/back
        net : function(){
            return {
                bottom : this.bottom[26] + "%",
                left : this.left[26] + "%"
            }
        },
        // serveur
        apache : function(){
            return {
                bottom : this.bottom[27] + "%",
                left : this.left[27] + "%"
            }
        },
        nginx : function(){
            return {
                bottom : this.bottom[28] + "%",
                left : this.left[28] + "%"
            }
        },
        iis : function(){
            return {
                bottom : this.bottom[29] + "%",
                left : this.left[29] + "%"
            }
        },
        // BDD
        mySQL : function(){
            return {
                bottom : this.bottom[30] + "%",
                left : this.left[30] + "%"
            }
        },
        mongodb : function(){
            return {
                bottom : this.bottom[31] + "%",
                left : this.left[31] + "%"
            }
        },
        SQLServer : function(){
            return {
                bottom : this.bottom[32] + "%",
                left : this.left[32] + "%"
            }
        },
        postgreSQL : function(){
            return {
                bottom : this.bottom[33] + "%",
                left : this.left[33] + "%"
            }
        },
        oracle : function(){
            return {
                bottom : this.bottom[34] + "%",
                left : this.left[34] + "%"
            }
        },
        // outils
        adobeFlash : function(){
            return {
                bottom : this.bottom[35] + "%",
                left : this.left[35] + "%"
            }
        },
        wordpress : function(){
            return {
                bottom : this.bottom[36] + "%",
                left : this.left[36] + "%"
            }
        },
        shopify : function(){
            return {
                bottom : this.bottom[37] + "%",
                left : this.left[37] + "%"
            }
        },
        joomla : function(){
            return {
                bottom : this.bottom[38] + "%",
                left : this.left[38] + "%"
            }
        },
        git : function(){
            return {
                bottom : this.bottom[39] + "%",
                left : this.left[39] + "%"
            }
        },
        nodejs : function(){
            return {
                bottom : this.bottom[40] + "%",
                left : this.left[40] + "%"
            }
        },
        lowCode : function(){
            return {
                bottom : this.bottom[41] + "%",
                left : this.left[41] + "%"
            }
        },
    }
})
