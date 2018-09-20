function maxMinAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        } 
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return `The minimum is ${min}, the maximum is ${max}, and the average is ${avg}.`
}

function fizzBuzz(n) {
    var output = "";
    for (var i = 1; i <= n; i++) {
      var special = "";
      if (i % 3 === 0) {
        special += "fizz";
      } if (i % 5 === 0) {
        special += "buzz";
      }
      output += special || i;
      output += ", ";
    }
    return output;
  }


function bracesValid(string) {
    var braces = {
        "()" : 0,
        "{}" : 0,
        "[]" : 0
    }
    for (var i = 0; i < string.length; i++) {
        if (srting[i] === "(") {
            braces["()"] += 1;
        } else if (srting[i] === ")") {
            braces["()"] -= 1;
        } else if (srting[i] === "{") {
            braces["{}"] += 1;
        } else if (srting[i] === "}") {
            braces["{}"] += 1;
        } else if (srting[i] === "[") {

        } else if string[i] === "]") {
            braces["[]"] += 1;
        }

        }
    }
}