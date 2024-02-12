
document.querySelector('.solveBtn').addEventListener('click', function() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);



    console.log(a, b, c);
});



// Reference
// def yIntFormula(c):
//     print(f'The y-intercept is: (0, {c})')

// def vertexFormula(a, b, c):
//     if(a == 0):
//         print('')
//     else:
//         xVert = -b / (2 * a)
//         yVert = a * (xVert ** 2) + (b * xVert) + c
//         print(f'The vertex is: ({round(xVert, 3)}, {round(yVert, 3)})')

// def zerosFormula(a, b,c):
//     if(a == 0):
//         print('The variable \'a\' must be greater than 0')
//     elif(a < 0):
//         qePos = (-b + math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
//         qeNeg = (-b - math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
//         print(f"The x-intercepts are: ({round(qePos, 3)}, 0) ({round(qeNeg, 3)}, 0)")
//     else:
//         qePos = (-b + math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
//         qeNeg = (-b - math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
//         print(f"The x-intercepts are: ({round(qeNeg, 3)}, 0) ({round(qePos, 3)}, 0)")

// try:
//     yIntFormula(c)
//     vertexFormula(a, b, c)
//     zerosFormula(a, b, c)
    
// except:
//     print("There are no intercepts")