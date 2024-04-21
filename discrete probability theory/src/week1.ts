/*Problem: How many times is the digit sum of a number between 1 and 150 greater than 3? */

function digitSum(n: number): number {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function countDigitSumGreaterThanThree(): number {
    let count = 0;
    for (let i = 1; i <= 150; i++) {
        if (digitSum(i) > 3) {
            count++;
        }
    }
    return count;
}

console.log(countDigitSumGreaterThanThree());
