
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    switch (operation) {
      case '+':
        setResult(parseInt(num1) + parseInt(num2));
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <Layout>
     
      <div>
      <h3>Basic react calc</h3>
        <input
          type="number"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(event) => setNum2(event.target.value)}
        />
        <select value={operation} onChange={(event) => setOperation(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button onClick={handleCalculate}>Calculate</button>
        <p>Result: {result}</p>
      </div>
    </Layout>



    
  );
};

export default Calculator;