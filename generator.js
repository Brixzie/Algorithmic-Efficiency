
function randomNumbers(x){
    var numbers = [];
    for(i = 0; i < x; i++){
        numbers.push(Math.floor(Math.random() * 999));
    }
    return numbers;
}

function simpleSort(array){
    var carrier;
    var length = array.length;
    var t0 = performance.now();
    for(i = 0; i < length; i++){
        for(x = i; x < length; x++){
            if(array[x] < array[i]){
                carrier = array[x];
                array[x] = array[i];
                array[i] = carrier;
            }
        }
    }
    var t1 = performance.now()
    console.log("SimpleSort took " + (t1 - t0) + " milliseconds to complete.");
    return array;
}

function countElements(array){
    return array.length;
}

function presentElements(elements){
    for(i = 0; i < elements.length; i++){
        document.write(" " + elements[i] + " - ");
        if(i % 7 == 1){
            document.write("<br>");
        }
    }
    document.write("<br>");
}
