var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var seta1 = document.getElementById('seta1');
var seta2 = document.getElementById('seta2');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var i = 1;

    seta1.onclick = function() {
        if(i == 1) { sl3(); } 
        else { 
            if(i == 2) { sl1();} 
            else { sl2();}
        }
    }

    seta2.onclick = function() {
        if(i == 1) { sl2(); } 
        else { 
            if(i == 2) { sl3();} 
            else { sl1();}
        }
    }

    btn1.onclick = function() {
        sl1();
    }

    btn2.onclick =  function() {
        sl2();
    }

    btn3.onclick = function(){
        sl3();
    }

    function sl1() {
        slide1.style.display = "flex";
        slide2.style.display = "none";
        slide3.style.display = "none";
        btn1.style.backgroundColor = "#5969FF";
        btn2.style.backgroundColor = "#11181ff2";
        btn3.style.backgroundColor = "#11181ff2";
        i = 1;
    }

    function sl2() {
        slide1.style.display = "none";
        slide2.style.display = "flex";
        slide3.style.display = "none";
        btn1.style.backgroundColor = "#11181ff2";
        btn2.style.backgroundColor = "#5969FF";
        btn3.style.backgroundColor = "#11181ff2";
        i = 2;
    }

    function sl3() {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "flex";
        btn1.style.backgroundColor = "#11181ff2";
        btn2.style.backgroundColor = "#11181ff2";
        btn3.style.backgroundColor = "#5969FF";
        i = 3;
    }
