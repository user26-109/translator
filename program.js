document.getElementById("myForm").onsubmit = execute;
const result = document.getElementById("result");
const input = document.getElementById("input");
const option = document.getElementById("option");
const list1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", ".", "?", "%", "$", "#"];
const list2 = ["m", "l", "n", "e", "d", "z", "a", "w", "s", "g", "c", "t", "b", "f", "h", "i", "v", "x", "y", "o", "p", "q", "r", "k", "u", "j", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", ".", "?", "%", "$", "#"];
function execute(event) {
    event.preventDefault();
    let a = input.value;
    result.value = "";
    if (option.value === "my") {
        for (let i = 0; i < a.length; i++) {
            b = list2[list1.indexOf(a[i].toLowerCase())];
            if (b !== undefined) {
                result.value += b;
            }
            else {
                result.value += a[i];
            }
        }
    }
    else if (option.value === "normal") {
        for (let i = 0; i < a.length; i++) {
            b = list1[list2.indexOf(a[i].toLowerCase())];
            if (b !== undefined) {
                result.value += b;
            }
            else {
                result.value += a[i];
            }
        }
    }
}