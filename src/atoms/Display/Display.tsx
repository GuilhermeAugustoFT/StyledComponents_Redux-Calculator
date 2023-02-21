
import { useSelector } from 'react-redux';
import { getDisplayValue } from '../../Redux/Reducers/displayValue';
import * as Styles from './Display.styles';

function Display() {

    let result  = useSelector(getDisplayValue);

    return (
        <Styles.Display>
            <Styles.Result>{result === "" ? "0" : result}</Styles.Result>
        </Styles.Display>
    )
}

export default Display;