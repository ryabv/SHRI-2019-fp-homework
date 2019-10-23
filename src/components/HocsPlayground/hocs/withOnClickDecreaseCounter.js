import {withHandlers} from 'recompose';


export default withHandlers({
    onClick: ({setDecCounter, decCounter, setOuterColor, setInnerColor}) => () => {
        --decCounter;
        if (decCounter === 0) {
            decCounter = 5;
            setOuterColor('orange');
            setInnerColor('orange');
        }
        setDecCounter(decCounter);
    },
});
