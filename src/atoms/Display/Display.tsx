import { IDisplay } from '../../types/Display';
import * as Styles from './Display.styles';

function Display({result}: IDisplay) {
    return (
        <Styles.Display>
            <Styles.Result>{result}</Styles.Result>
        </Styles.Display>
    )
}

export default Display;