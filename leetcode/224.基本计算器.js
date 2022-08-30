/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let expression = s.replace(/\s/g, '');
  return calculateReversePolishNotation(
    expressionToReversePolishNotation(expression)
  );
};

/**
 * 1. 先将中缀表达式转换为逆波兰表达式, 注意对 - 作为单元运算符的处理。
 * 2. 对逆波兰表达式计算
 */

function calculateReversePolishNotation(reversePolishNotation) {
  const stack = [],
    ops = /(\+)|-|(\/)|(\*)|(\()|(\))/;

  for (let op of reversePolishNotation) {
    // 对操作值直接push到栈
    if (!ops.test(op)) {
      stack.push(op);
      continue;
    }
    // 对操作符分类讨论

    let a = stack.pop(),
      b = stack.pop() || 0; // 考虑单操作符的情况

    if (op === '+') {
      stack.push(a + b);
    } else if (op === '-') {
      stack.push(b - a);
    } else if (op === '*') {
      stack.push(a * b);
    } else if (op === '/') {
      stack.push(b / a);
    }
  }

  console.log(stack);
  return stack[0];
}

const peak = arr => (arr.length === 0 ? undefined : arr[arr.length - 1]);

function expressionToReversePolishNotation(expression) {
  const ops = /(\+|\-|\/|\*|\(|\))/;
  let filtered = expression.split(ops).filter(v => v !== '');
  const data = [];
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === '(' && filtered[i + 1] === '-') {
      data.push(filtered[i]);
      data.push(0);
    } else {
      data.push(filtered[i]);
    }
  }

  console.log('before converted', data);
  const reversePolishNotation = [],
    stack = [];

  for (let op of data) {
    if (!ops.test(op)) {
      // 对被操作值直接push到逆波兰表达式
      reversePolishNotation.push(Number(op));
      continue;
    }

    // 对操作符的判断

    if (stack.length === 0 || op === '(') {
      stack.push(op);
    } else {
      // 如果当前操作符的优先低于栈顶，将操作符push
      if (expComp(peak(stack), op)) {
        if (op === ')') {
          while (peak(stack) !== '(') {
            reversePolishNotation.push(stack.pop());
          }
          stack.pop();
        } else {
          while (expComp(peak(stack), op) && stack.length) {
            reversePolishNotation.push(stack.pop());
          }
          stack.push(op);
        }
      } else {
        stack.push(op);
      }
    }
  }

  while (stack.length) {
    reversePolishNotation.push(stack.pop());
  }

  console.log('converted, ', reversePolishNotation);
  return reversePolishNotation;
}

// a 的优先级是否比 b 要高
function expComp(a, b) {
  // 同优先级内，前面的必定比后面的要高
  // * / 的优先级最高
  // + - 的优先级其次
  // ) 的优先级最低
  const high = ['/', '*'],
    low = ['+', '-'],
    gate = ')';

  if (b === gate) {
    return true;
  }

  if ((low.includes(a) && low.includes(b)) || high.includes(a)) {
    return true;
  }

  return false;
}
// @lc code=end

// calculate('1 + 12');
calculate('1-(-2)');
