const cursor = document.getElementById("cursor")
const night = document.querySelector(".nuit")
const buttonNight = document.getElementById("button_night")
var nightOn = false
const legende = document.getElementById("legende")
var legendeOn = false
const timeBar = document.getElementById("time_bar")


buttonNight.addEventListener('click', function(){
    if(nightOn == false) {
        nightOn = true
        night.setAttribute('style', 'display: block;')
    } else {
        nightOn = false
        night.setAttribute('style', 'display: none;')
    }
})

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.clientY)+"px; left:"+(e.clientX)+"px;")
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

const canvaTendance = document.getElementById("canvas_Tendance")
const canvaEtabli = document.getElementById("canvas_etabli")
const canvaMourrant = document.getElementById("canvas_mourrant")
const canvaEmergeant = document.getElementById("canvas_emergeant")
var points = document.querySelectorAll(".button_point")

function elementPosition (a) {
    var b = a.getBoundingClientRect();
    return {
      clientX: a.offsetLeft,
      clientY: a.offsetTop,
      clientX: (b.x || b.left),
      clientY: (b.y || b.top)
    }
  }


var positionTendance = elementPosition(canvaTendance)
var positionEtabli = elementPosition(canvaEtabli)
var positionMourrant = elementPosition(canvaMourrant)
var positionEmergeant = elementPosition(canvaEmergeant)
var positionPoints = []

function recupPos() {
    positionPoints = []
    points.forEach(point => {
        positionPoints.push(elementPosition(point))
    });
}

function testerCollision(woBox, woPoint ,boxBX, boxAX, boxBY, boxAY, largeurBoxA, largeurBoxB, hauteurBoxA, hauteurBoxB ) {
    if (!(boxBX > boxAX + largeurBoxA || boxBX < boxAX - largeurBoxB || boxBY > boxAY + hauteurBoxA || boxBY < boxAY - hauteurBoxB)) {
        if(woBox == "Tendance"){
            points[woPoint].setAttribute('style', 'background-color: #7EA477;')
        }else if(woBox == "Etabli"){
            points[woPoint].setAttribute('style', 'background-color: #55618B;')
        }else if(woBox == "Mourrant"){
            points[woPoint].setAttribute('style', 'background-color: #CC6363;')
        }else if(woBox == "Emergeant"){
            points[woPoint].setAttribute('style', 'background-color: #D1902E;')
        }
    }
}

function testColorPoint() {
    recupPos()
    let compteur = 0
    positionPoints.forEach(point => {
        testerCollision("Tendance", compteur ,point.clientX, positionTendance.clientX, point.clientY, positionTendance.clientY, canvaTendance.offsetWidth, points[compteur].offsetWidth, canvaTendance.offsetHeight, points[compteur].offsetHeight)
        testerCollision("Etabli", compteur ,point.clientX, positionEtabli.clientX, point.clientY, positionEtabli.clientY, canvaEtabli.offsetWidth, points[compteur].offsetWidth, canvaEtabli.offsetHeight, points[compteur].offsetHeight)
        testerCollision("Mourrant", compteur ,point.clientX, positionMourrant.clientX, point.clientY, positionMourrant.clientY, canvaMourrant.offsetWidth, points[compteur].offsetWidth, canvaMourrant.offsetHeight, points[compteur].offsetHeight)
        testerCollision("Emergeant", compteur ,point.clientX, positionEmergeant.clientX, point.clientY, positionEmergeant.clientY, canvaEmergeant.offsetWidth, points[compteur].offsetWidth, canvaEmergeant.offsetHeight, points[compteur].offsetHeight)
        compteur += 1
    });
}

testColorPoint();
points[0].addEventListener("transitionend", testColorPoint);