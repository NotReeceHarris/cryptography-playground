const xal1 = require('./xal1');

const password = 'abc123#';
const content = 'hello world';
const buffer = Buffer.from(content, 'utf8');

const initiate_class_start = performance.now();
const initiated_class = new xal1(password);
const initiate_class_end = performance.now();

const encrypt_start = performance.now();
const encrypted_value = initiated_class.encrypt(buffer);
const encrypt_end = performance.now();

const decryption_start = performance.now();
const decrypted_value = initiated_class.decrypt(encrypted_value);
const decryption_end = performance.now();

console.log(` ___    ___ ________  ___     _____     
|\\  \\  /  /|\\   __  \\|\\  \\   / __  \\    
\\ \\  \\/  / | \\  \\|\\  \\ \\  \\ |\\/_|\\  \\   
 \\ \\    / / \\ \\   __  \\ \\  \\\\|/ \\ \\  \\  
  /     \\/   \\ \\  \\ \\  \\ \\  \\____\\ \\  \\ 
 /  /\\   \\    \\ \\__\\ \\__\\ \\_______\\ \\__\\
/__/ /\\ __\\    \\|__|\\|__|\\|_______|\\|__|
|__|/ \\|__|

Password : ${password}
Content  : ${content}

Class initiation time\t: ${initiate_class_end - initiate_class_start} ms
Encryption time\t\t: ${encrypt_end - encrypt_start} ms
Decryption time\t\t: ${decryption_end - decryption_start} ms
Input same as output\t: ${buffer == decrypted_value ? 'yes' : 'no'}
`);