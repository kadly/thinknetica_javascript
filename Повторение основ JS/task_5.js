// Подсчитать в тексте количество букв 
let userData = prompt("Enter any text here:").toLowerCase();
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
let consonants = 0;
let vowels = 0;
let count;

for (count = 0; count < userData.length; count++){
    let char = userData.charAt(count);
    if(char.match(/[aeiou]/)){
        switch (char) {
            case 'a':
                a++;
                break;
            case 'e':
                e++;
                break;
            case 'i':
                i++;
                break;
            case 'o':
                o++;
                break;
            case 'u':
                u++;
                break;
        }
    } else if(char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
        consonants++;
    }
}

 console.log ("a: " + a);
 console.log ("e: " + e);
 console.log ("i: " + i);
 console.log ("o: " + o);
 console.log ("u: " + u);

 splittedUserData = userData.split(' ').join('');
 vowels = splittedUserData.length - consonants;

console.log ("consonants: " + consonants);
console.log ("vowels: " + vowels);