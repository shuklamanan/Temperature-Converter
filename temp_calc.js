function conver(){
    let cel = document.getElementById("cels").value;
    let far = document.getElementById("fahre").value;
    let kel = document.getElementById("kel").value;

    if(cel != ''){
        cel = parseFloat(cel);
        far = (cel * (9 / 5)) + 32;
        kel = cel + 273.15;
    }
    else if(far != ''){
        far = parseFloat(far);
        cel = (far-32)*(5/9);
        kel = (cel)+273.15;
    }
    else{
        kel = parseFloat(kel);
        cel = kel - 273.15;
        far = (cel * (9 / 5)) + 32;
    }
    document.getElementById("fahre").value = parseFloat(far).toFixed(4);
    document.getElementById("cels").value = parseFloat(cel).toFixed(4);
    document.getElementById("kel").value = parseFloat(kel).toFixed(4);
}

function ClearFields() {

    document.getElementById("cels").value = "";
    document.getElementById("fahre").value = "";
    document.getElementById("kel").value = "";
}
