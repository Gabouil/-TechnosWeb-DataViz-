
new Vue({
    el: "#mon_app",
    data: {
        timeBar : 1,
        bottom : [],
        left : [],
        coef : 80,
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
                        this.left.push(Number(50 + data["croissance_decroissance_2004"]/1.8))
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
                        this.left.push(Number(50 + data["croissance_decroissance_2012"]/1.8))

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
                        this.left.push(Number(50 + data["croissance_decroissance_2017"]/1.8))

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
                        this.left.push(Number(50 + data["croissance_decroissance_2020"]/1.8))

                        if(data["totale_users_year_2020"] < 1000000){
                            this.bottom.push(Number((50 * data["totale_users_year_2020"])/1000000))
                        } else if(data["totale_users_year_2020"] > 1000000 ) {
                            this.bottom.push(Number(((this.coef * data["totale_users_year_2020"]) / 15680000)+50))
                        }else {
                            this.bottom.push(Number(0))
                        }
                    });
                }
                console.log(ourData)
            }
            ourResquest.send()
        }
    },
    computed: {
        // langage
        // front
        css : function(){
            if(this.bottom[0] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[0] + "%",
                    left : this.left[0] + "%"
                }
            }
        },
        c : function(){
            if(this.bottom[1] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[1] + "%",
                    left : this.left[1] + "%"
                }
            }
        },
        cpp : function(){
            if(this.bottom[2] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[2] + "%",
                    left : this.left[2] + "%"
                }
            }
        },
        // back
        python : function(){
            if(this.bottom[3] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[3] + "%",
                    left : this.left[3] + "%"
                }
            }
        },
        php : function(){
            if(this.bottom[4] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[4] + "%",
                    left : this.left[4] + "%"
                }
            }
        },
        java : function(){
            if(this.bottom[5] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[5] + "%",
                    left : this.left[5] + "%"
                }
            }
        },
        ruby : function(){
            if(this.bottom[6] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[6] + "%",
                    left : this.left[6] + "%"
                }
            }
        },
        sql : function(){
            if(this.bottom[7] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[7] + "%",
                    left : this.left[7] + "%"
                }
            }
        },
        csh : function(){
            if(this.bottom[8] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[8] + "%",
                    left : this.left[8] + "%"
                }
            }
        },

        // front/back
        javaScript : function(){
            if(this.bottom[9] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[9] + "%",
                    left : this.left[9] + "%"
                }
            }
        },
        typeScript : function(){
            if(this.bottom[10] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[10] + "%",
                    left : this.left[10] + "%"
                }
            }
        },
        objectc : function(){
            if(this.bottom[11] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[11] + "%",
                    left : this.left[11] + "%"
                }
            }
        },
        kotlin : function(){
            if(this.bottom[12] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[12] + "%",
                    left : this.left[12] + "%"
                }
            }
        },
        // Frameworks
        // Front
        reactjs : function() {
            if(this.bottom[13] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[13] + "%",
                    left : this.left[13] + "%"
                }
            }
        },
        reactNatif : function(){
            if(this.bottom[14] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[14] + "%",
                    left : this.left[14] + "%"
                }
            }
        },
        angularJS : function(){
            if(this.bottom[15] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[15] + "%",
                    left : this.left[15] + "%"
                }
            }
        },
        angular : function(){
            if(this.bottom[16] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[16] + "%",
                    left : this.left[16] + "%"
                }
            }
        },
        vue : function(){
            if(this.bottom[17] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[17] + "%",
                    left : this.left[17] + "%"
                }
            }
        },
        bootstrap : function(){
            if(this.bottom[18] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[18] + "%",
                    left : this.left[18] + "%"
                }
            }
        },
        tailwind : function(){
            if(this.bottom[19] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[19] + "%",
                    left : this.left[19] + "%"
                }
            }
        },
        // back
        laravel : function(){
            if(this.bottom[20] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[20] + "%",
                    left : this.left[20] + "%"
                }
            }
        },
        symphony : function(){
            if(this.bottom[21] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[21] + "%",
                    left : this.left[21] + "%"
                }
            }
        },
        rails : function(){
            if(this.bottom[22] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[22] + "%",
                    left : this.left[22] + "%"
                }
            }
        },
        django : function(){
            if(this.bottom[23] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[23] + "%",
                    left : this.left[23] + "%"
                }
            }
        },
        cakePHP : function(){
            if(this.bottom[24] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[24] + "%",
                    left : this.left[24] + "%"
                }
            }
        },
        // front/back
        net : function(){
            if(this.bottom[25] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[25] + "%",
                    left : this.left[25] + "%"
                }
            }
        },
        // serveur
        apache : function(){
            if(this.bottom[26] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[26] + "%",
                    left : this.left[26] + "%"
                }
            }
        },
        nginx : function(){
            if(this.bottom[27] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[27] + "%",
                    left : this.left[27] + "%"
                }
            }
        },
        iis : function(){
            if(this.bottom[28] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[28] + "%",
                    left : this.left[28] + "%"
                }
            }
        },
        // BDD
        mySQL : function(){
            if(this.bottom[29] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[29] + "%",
                    left : this.left[29] + "%"
                }
            }
        },
        mongodb : function(){
            if(this.bottom[30] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[30] + "%",
                    left : this.left[30] + "%"
                }
            }
        },
        SQLServer : function(){
            if(this.bottom[31] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[31] + "%",
                    left : this.left[31] + "%"
                }
            }
        },
        postgreSQL : function(){
            if(this.bottom[32] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[32] + "%",
                    left : this.left[32] + "%"
                }
            }
        },
        oracle : function(){
            if(this.bottom[33] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[33] + "%",
                    left : this.left[33] + "%"
                }
            }
        },
        // outils
        adobeFlash : function(){
            if(this.bottom[34] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[34] + "%",
                    left : this.left[34] + "%"
                }
            }
        },
        wordpress : function(){
            if(this.bottom[35] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[35] + "%",
                    left : this.left[35] + "%"
                }
            }
        },
        shopify : function(){
            if(this.bottom[36] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[36] + "%",
                    left : this.left[36] + "%"
                }
            }
        },
        joomla : function(){
            if(this.bottom[37] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[37] + "%",
                    left : this.left[37] + "%"
                }
            }
        },
        nodejs : function(){
            if(this.bottom[38] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[38] + "%",
                    left : this.left[38] + "%"
                }
            }
        },
        lowCode : function(){
            if(this.bottom[39] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[39] + "%",
                    left : this.left[39] + "%"
                }
            }
        },
        git : function(){
            if(this.bottom[40] == 0) {
                return {
                    display : "none"
                }
            }else {
                return {
                    display : "flex",
                    bottom : this.bottom[40] + "%",
                    left : this.left[40] + "%"
                }
            }
        },
    }
})