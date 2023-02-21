import Display from "../../atoms/Display";
import CalculatorKeyboard from "../../molecules/CalculatorKeyboard";

import * as Styles from "./Calculator.styles";

function Calculator() {
  return (
    <Styles.Container>
      <Display result="0" />
      <CalculatorKeyboard />
    </Styles.Container>
  );
}

export default Calculator;
