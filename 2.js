function manipulateString(str) {
    const upperStr = str.toUpperCase();


    function logString() {
        console.log(`The manipulated string is: ${upperStr}`);
    }

    return logString;
}


const log = manipulateString("hello world");
log(); 
