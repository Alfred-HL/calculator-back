const express = require('express')
const router = express.Router()
const { Calculator } = require('./calculator');

const calc = new Calculator();

let inputHistory = [];

function record(calculation) {
  inputHistory.push(calculation)
}

//拆分算式
function tokenize(expression) {
  const tokens = [];
  const regex = /\s*(=>|{|}|[()]|[-+*/]|\d+)\s*/g;
  let result;

  while (result = regex.exec(expression)) {
    if (result[1] !== undefined) {
      tokens.push(result[1]);
    }
  }

  return tokens;
}

//解析算式
function parse(tokens) {
  const output = [];
  const operators = [];
  const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

  const applyOperator = () => {
    const operator = operators.pop();
    const right = output.pop();
    const left = output.pop();
    output.push({ operator, left, right });
  };

  tokens.forEach(token => {
    if (!isNaN(token)) {
      output.push(Number(token));
    } else if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        applyOperator();
      }
      operators.pop(); // Remove the '('
    } else {
      while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
        applyOperator();
      }
      operators.push(token);
    }
  });

  while (operators.length) {
    applyOperator();
  }

  return output[0]; // AST or RPN
}

//計算函數
function evaluate(node) {
  if (typeof node === 'number') {
    return node;
  }

  const { operator, left, right } = node;
  const leftValue = evaluate(left);
  const rightValue = evaluate(right);

  switch (operator) {
    case '+': return calc.plus(leftValue, rightValue);
    case '-': return calc.minus(leftValue, rightValue);
    case '*': return calc.multiply(leftValue, rightValue);
    case '/': return calc.divide(leftValue, rightValue);
    default: throw new Error(`Unknown operator: ${operator}`);
  }
}

//算式輸入函數
function calculate(expression) {
  try {
    const tokens = tokenize(expression);
    const ast = parse(tokens);
    const result = evaluate(ast);
    const calcRecord = `${expression} = ${result}`
    record(calcRecord)
    return result
  } catch (error) {
    console.error('Error evaluating expression:', error);
  }
}

function calcHistory() {
  return inputHistory
}

module.exports = {
  calculate,
  calcHistory
};
