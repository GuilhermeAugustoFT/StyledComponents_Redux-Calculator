import { useDispatch } from "react-redux";
import Button from "../atoms/Button";
import { changeDisplayValue } from "../Redux/Reducers/displayValue";
import { changeOperator } from "../Redux/Reducers/operator";
import * as Styles from "./CalculatorKeyboard.styles";


function CalculatorKeyboard() {
  const dispath = useDispatch();
  const handleButtonClick = (value: string) => {
    dispath(changeDisplayValue(value));
  };

  const handleOperatorButtonClick = (operator: string) => {
    dispath(changeOperator(operator));
  };

  return (
    <div>
      <Styles.Container>
        <Styles.Span2>
          <Button
            operatorButton
            text="C"
            onClick={() => handleOperatorButtonClick("Limpar Tudo")}
          />
        </Styles.Span2>
        <Button
          operatorButton
          text="&larr;"
          onClick={() => handleOperatorButtonClick("Apagar")}
        />
        <Button
          operatorButton
          text="&divide;"
          onClick={() => handleOperatorButtonClick("Dividir")}
        />
        <Button text="7" onClick={() => handleButtonClick("7")} />
        <Button text="8" onClick={() => handleButtonClick("8")} />
        <Button text="9" onClick={() => handleButtonClick("9")} />
        <Button
          operatorButton
          text="X"
          onClick={() => handleOperatorButtonClick("Vezes")}
        />
        <Button text="4" onClick={() => handleButtonClick("4")} />
        <Button text="5" onClick={() => handleButtonClick("5")} />
        <Button text="6" onClick={() => handleButtonClick("6")} />
        <Button
          operatorButton
          text="-"
          onClick={() => handleOperatorButtonClick("Menos")}
        />
        <Button text="1" onClick={() => handleButtonClick("1")} />
        <Button text="2" onClick={() => handleButtonClick("2")} />
        <Button text="3" onClick={() => handleButtonClick("3")} />
        <Button
          operatorButton
          text="+"
          onClick={() => handleOperatorButtonClick("Mais")}
        />
        <Styles.Span3>
          <Button text="0" onClick={() => handleButtonClick("0")} />
        </Styles.Span3>
        <Button
          operatorButton
          text="="
          onClick={() => handleOperatorButtonClick("Igual")}
        />
      </Styles.Container>
    </div>
  );
}

export default CalculatorKeyboard;