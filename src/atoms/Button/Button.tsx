import { IButton } from "../../types/Button";
import * as Styles from "./Button.styles";

function Button({ operatorButton, text, onClick }: IButton) {
  return (
    <>
      {operatorButton ? (
        <Styles.OperatorButton onClick={onClick}>
          <Styles.Text>{text}</Styles.Text>
        </Styles.OperatorButton>
      ) : (
        <Styles.Button onClick={onClick}>
          <Styles.Text>{text}</Styles.Text>
        </Styles.Button>
      )}
    </>
  );
}

export default Button;
