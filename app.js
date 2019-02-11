//click sounds

let s1 = document.getElementById("plays1")
function playClap () {
    s1.play()
}

let s2 = document.getElementById("plays2")
function playHihat () {
    s2.play()
}

let s3 = document.getElementById("plays3")
function playKick () {
    s3.play()
}

let s4 = document.getElementById("plays4")
function playOpenhat () {
    s4.play()
}

let s5 = document.getElementById("plays5")
function playBoom () {
    s5.play()
}

let s6 = document.getElementById("plays6")
function playRide () {
    s6.play()
}

let s7 = document.getElementById("plays7")
function playSnare () {
    s7.play()
}

let s8 = document.getElementById("plays8")
function playTom () {
    s8.play()
}

let s9 = document.getElementById("plays9")
function playTink () {
    s9.play()
}

//listener

window.addEventListener("keypress", function2)

function function2(event) {
    if (event.key=="a")  {
        document.getElementById("plays1")
        s1.play()
    }
    else if (event.key=="s") {
            document.getElementById("plays2")
            s2.play()
    }
    else if (event.key=="d") {
        document.getElementById("plays3")
        s3.play()
    }
    else if (event.key=="f") {
        document.getElementById("plays4")
        s4.play()
    }
    else if (event.key=="g") {
        document.getElementById("plays5")
        s5.play()
    }
    else if (event.key=="h") {
        document.getElementById("plays6")
        s6.play()
    }
    else if (event.key=="j") {
        document.getElementById("plays7")
        s7.play()
    }
    else if (event.key=="k") {
        document.getElementById("plays8")
        s8.play()
    }
    else if (event.key=="l") {
        document.getElementById("plays9")
        s9.play()
    }
    else { 
    
    }}