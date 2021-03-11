
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

function meanValue(array){
    total = 0;
    mean = 0;
    n = array.length;
    for(i = 0; i < n; i++){
        total = total + array[i];
    }
    mean = total / n;
    return mean;
}

function probability(p, n){
    return p * n;
}

function factorialSimple(x){
    total = 0;
    n=x-1;
    if(x == 0){
        x = 1;
    }
    for(n; n >= 1; n--){
        total = total + (x * n);
    }
    return total;
}

function factorialRecursive(x){
    factorial = x;
    if(factorial == 0){
        factorial = 1;
    }
    for(n = x-1; n >= 1; n--){
        factorial = factorial * n;
    }
    return factorial;
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

exports.countElements = countElements;
exports.simpleSort = simpleSort;
exports.factorialSimple = factorialSimple;
exports.meanValue = meanValue;
exports.probability = probability;