let graph = document.getElementById('calculator');
let calculator = Desmos.GraphingCalculator(graph);

document.querySelector('.solveBtn').addEventListener('click', function() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    let yInt = document.getElementById('yInt');
    let vertex = document.getElementById('vertex');
    let zeros = document.getElementById('zeros');

    let vertexFromula = function(a, b, c) {
        if(a == 0) {
            return `The variable \'a\' must be a value other than 0`
        }else if(isNaN(b)) {
            return 'Please enter a number.'
        }else {
            const xVert = -b / (2 * a)
            const yVert = a * (xVert ** 2) + (b * xVert) + c
            return `(${xVert.toFixed(3)}, ${yVert.toFixed(3)})`;
        };
    };
    
    let yIntFormula = function(a, b, c) {
        if(a == 0) {
            return `The variable \'a\' must be a value other than 0`
        } else {
            return `(0, ${c})`
        };
    };

    let zerosFormula = function(a, b, c) {
        const qePos = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
        const qeNeg = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
        if(a == 0) {
            return `The variable \'a\' must be a value other than 0`
        }else if (a < 0 && a > 0) {
            return `(${qePos.toFixed(3)}, 0), (${qeNeg.toFixed(3)}, 0)`
        }else if (isNaN(qePos) && isNaN(qeNeg)) {
            return zeros.innerText = `There are no intercepts`;
        }else {
            return `(${qeNeg.toFixed(3)}, 0), (${qePos.toFixed(3)}, 0)`
        };
    };
    vertex.innerText = vertexFromula(a, b, c);
    yInt.innerText = yIntFormula(a, b, c);
    zeros.innerText = zerosFormula(a, b, c)

    calculator.setExpression({ id: 'q', latex: 'y = ax^2+bx+c' });
    calculator.setExpression({ id: 'a-slider', latex:  `a = ${a}`});
    calculator.setExpression({ id: 'b-slider', latex: `b = ${b}` });
    calculator.setExpression({ id: 'c-slider', latex: `c = ${c}` });

});





