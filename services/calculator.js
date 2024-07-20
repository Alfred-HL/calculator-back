const express = require('express')
const router = express.Router()

const ROUND = 5
let inputHistory = [];

function record(calculation) {
  inputHistory.push(calculation)
}

class Calculator {
  //加法函數，並新增到inputHistory
  plus(v1, v2) {
    let addResult = v1 + v2
    let plusQuery = `${v1} + ${v2} = ${addResult}`
    record(plusQuery)
    return addResult
  }

  //減法函數，並新增到inputHistory
  minus(v1, v2) {
    let minusResult = v1 - v2
    let minusQuery = `${v1} - ${v2} = ${minusResult}`
    record(minusQuery)
    return minusResult
  }
 
  //乘法函數，並新增到inputHistory
  multiply(v1, v2) {
    let multiplyResult = v1 * v2
    let multiplyQuery = `${v1} * ${v2} = ${multiplyResult}`
    record(multiplyQuery)
    return multiplyResult
  }

  divide(v1, v2) {
    let divideResult = Number((v1 / v2).toFixed(ROUND))
    let divideQuery = `${v1} / ${v2} = ${divideResult}`
    // inputHistory.push(divideQuery)
    record(divideQuery)
    return divideResult
  }
}

//輸出歷史紀錄
function history(){
  return inputHistory
}

module.exports = {
  Calculator,
  history
};

