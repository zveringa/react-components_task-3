import './App.css';
import styles from './app.module.css';
import { useState } from 'react';
import { ButtonShadow } from './ButtonShadow';
import { ButtonShadowOperator } from './ButtonShadowOperator';
import { ButtonShadowClear } from './ButtonShadowClear';
import { ButtonShadowEqual } from './ButtonShadowEqual';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');
	const [disableEquals, setDisableEquals] = useState(false);
	console.log('Operator state is: ', operator);// operator state check-up
	
	const NUMS = ['1','2','3','4','5','6','7','8','9','0','+','-','=','C'];
			
				// HandleDigitClick

	const handleDigitClick = (number) => {
		let newOperand = '';
		
		if(operator === '' && operand1 === '0' ) {
			setOperand1(newOperand =+ number);
			setDisableEquals(true);
			
		} else if(operator === '+' || operator === '-' ) {
			setOperand2((newOperand) => (newOperand + number));
			
		
		} else {setOperand1(operand1 + number);
			}
	}
	
	const handleAdd = () => {
		if(operator === '=') {
			setOperand1(result);
			setOperand2('');
		}
		setOperator('+');
		setDisableEquals(false);
	};
	
	const handleSubtract = () => {
		if(operator === '=') {
			setOperand1(result);
			setOperand2('');
		}
		setOperator('-');
		setDisableEquals(false);
	};

	const handleClear = () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
		setResult('');
		setDisableEquals(true);
		console.log("Cleared");
	};
	
	const handleEquals = () => {
		let calculatedResult= '0';
		
		if(operator === '+' && operand1 && operand2) {
				
				calculatedResult = parseInt(operand1) + parseInt(operand2);
				setResult(calculatedResult.toString());
				setOperator('=');
				setOperand1(calculatedResult.toString());
				setOperand2('');
				
		} else if (operator === '-' && operand1 && operand2) {
			calculatedResult = parseInt(operand1) - parseInt(operand2);
			setResult(calculatedResult.toString());
				setOperator('=');
				setOperand1(calculatedResult.toString());
        		setOperand2('');
				
		} else if (operator === '=' && !operand2 ) {
			console.log('enter the number!'); 
			setDisableEquals(true);	
			setOperand1('0');
			setOperand2('');
			setOperator('=');		
		} else {
			setResult(operand1);
        	setOperator('=');
			}
		};
	
	return ( 
    <div className={styles['container']}>

      							{/* DISPLAY */}

    <div className={operator === '=' ? styles['displayAnswer'] : styles['display']}>
          {operator === '='  ? (result) : (`${operand1} ${operator} ${operand2}`)}
    </div>
        
								{/* BUTTONS */}
	<div className={styles['button-container']}>
          <table className={styles['number-buttons']}>
            <tbody>
              <tr>
                {NUMS.slice(0, 3).map((number) => (
                  <td key={number}>
                     <ButtonShadow number={number} onClick={handleDigitClick} />
                  </td>
                ))}
              </tr>
              <tr>
                {NUMS.slice(3, 6).map((number) => (
                  <td key={number}>
                    <ButtonShadow number={number} onClick={handleDigitClick} />
                  </td>
                ))}
              </tr>
              <tr>
                {NUMS.slice(6, 9).map((number) => (
                  <td key={number}>
                    <ButtonShadow number={number} onClick={handleDigitClick} />
                  </td>
                ))}
              </tr>
              <tr>
			  {NUMS.slice(9, 10).map((number) => (
                  <td key={number}>
                    <ButtonShadow number={number} onClick={handleDigitClick} />
                  </td>
                ))}
				{NUMS.slice(10, 11).map((number) => (
                  <td key={number}>
                    <ButtonShadowOperator number={number} onClick={handleAdd} />
                  </td>
                ))}
				{NUMS.slice(11, 12).map((number) => (
                  <td key={number}>
                    <ButtonShadowOperator number={number} onClick={handleSubtract} />
                  </td>
                ))}
            	</tr>
			  <tr>
			  {NUMS.slice(12, 13).map((number) => (
                  <td key={number} colSpan="2">
                    <ButtonShadowEqual number={number} onClick={handleEquals} disabled={disableEquals} style={disableEquals ? { backgroundColor: '#b4b4b4' } : {}}/>
                  </td>
                ))}
				{NUMS.slice(13, 14).map((number) => (
                  <td key={number} >
                    <ButtonShadowClear number={number}  onClick={handleClear} />
                  </td>
                ))}
				</tr>
							
            </tbody>
          </table>
          </div>
      </div>
  );
};