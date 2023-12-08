/*function ratios(a,b) {
    var a,b,r;
a=Number(document.getElementById("a").value);
b=Number(document.getElementById("b").value);
    for(r=b; r>1; r--){
        if((a % r) == 0 && (b % r) == 0) {
            a=a/r;
            b=b/r;
    }
    var ratios = a+":"+b;
    return ratios;
    }
    document.getElementById("r").value= r;
}*/
function add(a,b) {
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    r=a+b;
    document.getElementById("r").value=r;
}
/*
function validit() {
    // Get the value of the input field with id="a"
    let x = document.getElementById("a").value;
    // Get the value of the input field with id="b"
    let x = document.getElementById("b").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Correct";
    } else {
      text = "In Correct";
    }
    document.getElementById("demo").innerHTML = text;
  }*/