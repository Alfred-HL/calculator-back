const express = require('express')
const router = express.Router()

const ROUND = 5
let inputHistory = [];

//加法函數，並新贈到inputHistory
function plus(v1, v2) {
  let plusQuery = `${v1} + ${v2} = ${v1+v2}`
  inputHistory.push(plusQuery)
  return v1 + v2
}


//減法函數，並新贈到inputHistory
function minus(v1, v2) {
  let minusQuery = `${v1} - ${v2} = ${v1 - v2}`
  inputHistory.push(minusQuery)
  return v1 - v2
}


//乘法函數，並新贈到inputHistory
function multiply(v1, v2) {
  let multiplyQuery = `${v1} * ${v2} = ${v1 * v2}`
  inputHistory.push(multiplyQuery)
  return v1*v2
}


//除法函數，並新贈到inputHistory
function divide(v1, v2) {
  let divideResult = Number((v1 / v2).toFixed(ROUND))
  let divideQuery = `${v1} / ${v2} = ${divideResult}`
  inputHistory.push(divideQuery)
  return divideResult
}

//輸出歷史紀錄
function history(){
  return inputHistory
}

module.exports = {
  plus,
  minus,
  multiply,
  divide,
  history
};

