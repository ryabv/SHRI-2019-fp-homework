import {withHandlers} from 'recompose';

function randomColor() {
    const colors = ['red', 'blue', 'green', 'orange'];
    const index = Math.floor(Math.random() * 4);
    return colors[index];
}

export default withHandlers({
    onClick: ({setAngle, angle, setOuterColor, setInnerColor}) => () => {
        angle -= 30;

        if (Math.abs(angle) % 360 === 0) {
            setOuterColor(randomColor());
            setInnerColor(randomColor());
        }

        setAngle(angle);
    },
});
