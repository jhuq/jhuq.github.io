function toggleSeeMore() {
    if(document.getElementById("textarea").style.display == 'none') {
        document.getElementById("textarea").style.display = 'block';
        document.getElementById("seeMore").innerHTML = 'See less';
    }
    else {
        document.getElementById("textarea").style.display = 'none';
        document.getElementById("seeMore").innerHTML = 'See more';        
    }
}

function toggleSeeMore1() {
    if(document.getElementById("textarea1").style.display == 'none') {
        document.getElementById("textarea1").style.display = 'block';
        document.getElementById("seeMore1").innerHTML = 'See less';
    }
    else {
        document.getElementById("textarea1").style.display = 'none';
        document.getElementById("seeMore1").innerHTML = 'See more';        
    }
}