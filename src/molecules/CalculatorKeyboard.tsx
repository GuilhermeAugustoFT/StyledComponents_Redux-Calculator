import { useDispatch, useSelector } from "react-redux";
import Button from "../atoms/Button";
import {
  changeDisplayValue,
  changeFullDisplayValue,
  getDisplayValue,
} from "../Redux/Reducers/displayValue";
import { changeOperator, getOperator } from "../Redux/Reducers/operator";
import { changeFirstValue, getFirstValue } from "../Redux/Reducers/firstValue";
import * as Styles from "./CalculatorKeyboard.styles";
import {
  changeNewCalculation,
  getNewCalculationValue,
} from "../Redux/Reducers/newCalculation";

function CalculatorKeyboard() {
  const dispatch = useDispatch();
  let displayValue = useSelector(getDisplayValue);
  let firstValue = useSelector(getFirstValue);
  let stateOperator = useSelector(getOperator);
  let newCalculation = useSelector(getNewCalculationValue);

  const handleButtonClick = (value: string) => {
    if (newCalculation) {
      dispatch(changeFullDisplayValue(value));
      dispatch(changeNewCalculation(false))
    } else dispatch(changeDisplayValue(value));
  };

  const handleOperatorButtonClick = (operator: string) => {
    if (operator === "backspace") {
      dispatch(
        changeFullDisplayValue(
          displayValue.substring(0, displayValue.length - 1)
        )
      );
    }
    if (operator === "clear") {
      dispatch(changeFullDisplayValue("0"));
      dispatch(changeFirstValue(null));
      dispatch(changeOperator(""));
    }
    if (operator !== "=" && operator !== "backspace" && operator !== "clear") {
      dispatch(changeFullDisplayValue("0"));
      dispatch(changeFirstValue(parseInt(displayValue)));
      dispatch(changeOperator(operator));
    } else {
      dispatch(changeNewCalculation(true));
      if (firstValue) {
        if (stateOperator.operator === "+") {
          const result = firstValue + parseInt(displayValue);
          dispatch(changeFullDisplayValue(result.toString()));
        }
        if (stateOperator.operator === "-") {
          const result = firstValue - parseInt(displayValue);
          dispatch(changeFullDisplayValue(result.toString()));
        }
        if (stateOperator.operator === "/") {
          const result = firstValue / parseInt(displayValue);
          dispatch(changeFullDisplayValue(result.toString()));
        }
        if (stateOperator.operator === "x") {
          const result = firstValue * parseInt(displayValue);
          dispatch(changeFullDisplayValue(result.toString()));
        }
        dispatch(changeFirstValue(null));
        dispatch(changeOperator(""));
      }
    }
  };

  return (
    <div>
      <Styles.Container>
        <Styles.Span2>
          <Button
            operatorButton
            text="C"
            onClick={() => handleOperatorButtonClick("clear")}
          />
        </Styles.Span2>
        <Button
          operatorButton
          text="&larr;"
          onClick={() => handleOperatorButtonClick("backspace")}
        />
        <Button
          operatorButton
          text="&divide;"
          onClick={() => handleOperatorButtonClick("/")}
        />
        <Button text="7" onClick={() => handleButtonClick("7")} />
        <Button text="8" onClick={() => handleButtonClick("8")} />
        <Button text="9" onClick={() => handleButtonClick("9")} />
        <Button
          operatorButton
          text="X"
          onClick={() => handleOperatorButtonClick("x")}
        />
        <Button text="4" onClick={() => handleButtonClick("4")} />
        <Button text="5" onClick={() => handleButtonClick("5")} />
        <Button text="6" onClick={() => handleButtonClick("6")} />
        <Button
          operatorButton
          text="-"
          onClick={() => handleOperatorButtonClick("-")}
        />
        <Button text="1" onClick={() => handleButtonClick("1")} />
        <Button text="2" onClick={() => handleButtonClick("2")} />
        <Button text="3" onClick={() => handleButtonClick("3")} />
        <Button
          operatorButton
          text="+"
          onClick={() => handleOperatorButtonClick("+")}
        />
        <Styles.Span3>
          <Button text="0" onClick={() => handleButtonClick("0")} />
        </Styles.Span3>
        <Button
          operatorButton
          text="="
          onClick={() => handleOperatorButtonClick("=")}
        />
      </Styles.Container>
    </div>
  );
}

export default CalculatorKeyboard;
