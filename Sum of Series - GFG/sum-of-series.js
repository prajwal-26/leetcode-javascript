//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.seriesSum(n));
    }
}


                               
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @return {integer}
 */
class Solution {
  seriesSum(n) {
    return (n * (n + 1)) / 2;
  }
}

// Example usage:
const solution = new Solution();
const N = 1; // Change this to your desired value of N
const result = solution.seriesSum(N);



