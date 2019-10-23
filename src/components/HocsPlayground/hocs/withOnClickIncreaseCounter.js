import {withHandlers} from 'recompose';


export default withHandlers({
    onClick: ({setCounter, counter, setOuterColor, setInnerColor}) => () => {
        let isOdd = Boolean(++counter % 2);
        if (isOdd) {
            setInnerColor('green');
            setOuterColor('green');
        } else {
            setInnerColor('grey');
            setOuterColor('grey');
        }
        setCounter(counter);
    },
});
