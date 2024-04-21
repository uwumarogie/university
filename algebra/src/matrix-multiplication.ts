type Matrix = number [][];


function multiplyMatrices (matrix1: Matrix, matrix2: Matrix): Matrix {
    const size = matrix1.length;
    const result: Matrix = Array(size).fill(null).map(() => Array(size).fill(0));


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            for (let k = 0; k < size; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}


// Function to generate an identity matrix of size n
function identityMatrix(size: number): Matrix {
    const result: Matrix = Array(size).fill(null).map(() => Array(size).fill(0));
    for (let i = 0; i < size; i++) {
        result[i][i] = 1;
    }
    return result;
}

function matrixPower(matrix: Matrix, n: number): Matrix {
    const size = matrix.length;
    let result = identityMatrix(size);
    let base = matrix;

    while (n > 0) {
        if (n % 2 === 1) {
            result = multiplyMatrices(result, base);
        }
        base = multiplyMatrices(base, base);
        n = Math.floor(n / 2);
    }

    return result;
}

const A: Matrix = [
    [1, 2],
    [3, 4]
];

const result = matrixPower(A, 3);
console.log(result);