function reverseString(string) {
    return string.split("").reverse().join("").replace(" ", "").toLowerCase();
}

function isPalindrome(string) {
    return string.toLowerCase().replace(" ", "") == reverseString(string);
}

function multiplicationTable(int) {
    const num = parseInt(prompt('Enter an integer: '));
    for(let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`);
}
}

function MaxMinArray(arr) {
    let mn = arr[0];
    let mx = arr[0];
    arr.forEach(i => {
        if (i > mx) {
            mx = i;
        }
        if (i < mn) {
            mn = i;
        }
    });
    console.log(`Min = ${mn}, Max = ${mx}`);
}

function largestgiven(arr) {
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));
    const num3 = parseFloat(prompt("Enter third number: "));
    let largest;
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    console.log("The largest number is " + largest);

}

function arraysum(string) {
    arr = string.split("");
    let result = "0";
    arr.forEach(i => {
        result = parseInt(result) + parseInt(i)
    });
    console.log(`The sum is ${result}`)
}

function Pyramid(int) {
    let asterisk = "*";
    let gap = " ";
    for (i = 1; i < int + 1; i++) {
        if (i % 2 != 0) {
            let num = (int - i) / 2;
            console.log(`${gap.repeat(num)} ${asterisk.repeat(i)}`)
        }
    }
}

function even_odd(int) {
    const number = prompt("Enter a number: ");
    if(number % 2 == 0) {
        console.log("The number is even.");
    }
    else {
        console.log("The number is odd.");
    }
}

