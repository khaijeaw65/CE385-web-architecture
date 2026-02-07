
/**
 * 
 * @param { 'add' | 'subtract' | 'multiply' | 'divide' } type 
 * @param { number } a 
 * @param { number } b 
 */
const operation = (type, a, b) => {
  if (type === 'add') {
    return a + b;
  }

  if (type === 'subtract') {
    return a - b;
  }

  if (type === 'multiply') {
    return a * b;
  }

  if (type === 'divide') {
    return a / b;
  }

  throw new Error('Invalid operation type');
}

export default operation;