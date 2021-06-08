const cursor = document.getElementById("cursor")
const night = document.querySelector(".nuit")
const buttonNight = document.getElementById("button_night")
var nightOn = false
const legende = document.getElementById("legende")
var legendeOn = false

buttonNight.addEventListener('click', function(){
    if(nightOn == false) {
        nightOn = true
        night.setAttribute('style', 'display: block;')
    } else {
        nightOn = false
        night.setAttribute('style', 'display: none;')
    }
})
legende.addEventListener('click', function(){
    if(legendeOn == false) {
        legendeOn = true
        legende.setAttribute('style', 'right: -5px;')
    } else {
        legendeOn = false
        legende.setAttribute('style', '')
    }
})

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.clientY)+"px; left:"+(e.clientX)+"px;")
})

new Vue({
    el: "#mon_app",
    data: {
        timeBar : 0,
    },
    computed: {
        // langage
        // frontc
        css : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        c : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        cpp : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // back
        python : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        php : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        java : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        ruby : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        sql : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        csh : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },

        // front/back
        javaScript : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        typeScript : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        objectivec : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        kotlin : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // Frameworks
        // Front
        reactjs : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        reactNatif : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        angularJS : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        angular : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        vue : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        bootstrap : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        tailwind : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // back
        laraval : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        symphony : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        rails : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        django : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        flask : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        cakePHP : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // front/back
        net : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // serveur
        apache : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        nginx : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        iis : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // BDD
        mySQL : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        mongodb : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        SQLServer : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        postgreSQL : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        oracle : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        // outils
        adobeFlash : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        wordpress : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        shopify : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        joomla : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        git : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        nodejs : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
        lowCode : function(){
            return {
                bottom : "50%",
                left : "30%"
            }
        },
    }
})
