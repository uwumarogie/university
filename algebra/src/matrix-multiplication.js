function multiplyMatrices(matrix1, matrix2) {
    var size = matrix1.length;
    var result = Array(size).fill(null).map(function () { return Array(size).fill(0); });
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            for (var k = 0; k < size; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}
// Function to generate an identity matrix of size n
function identityMatrix(size) {
    var result = Array(size).fill(null).map(function () { return Array(size).fill(0); });
    for (var i = 0; i < size; i++) {
        result[i][i] = 1;
    }
    return result;
}
function matrixPower(matrix, n) {
    var size = matrix.length;
    var result = identityMatrix(size);
    var base = matrix;
    while (n > 0) {
        if (n % 2 === 1) {
            result = multiplyMatrices(result, base);
        }
        base = multiplyMatrices(base, base);
        n = Math.floor(n / 2);
    }
    return result;
}
var A = [
    [1, 2],
    [3, 4]
];
var result = matrixPower(A, 3);
console.log(result);
