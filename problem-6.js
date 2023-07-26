/* Task 6: Create a program that generates a random 
password of a specified length. The password should 
include a mix of uppercase letters, lowercase letters, 
numbers, and special characters. */

function generatePassword(length) {

    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length)
        password += allCharacters.charAt(randomIndex)
    }
    return password

}

// Example usage:
const length = 8; // You can specify your desired password length here
const password = generatePassword(length);
console.log(`Generated Password: ${password}`);
