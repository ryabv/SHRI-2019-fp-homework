/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withLargeSize from '../hocs/withLargeSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withOnClickSetAngle from '../hocs/withOnClickSetAngle';


export default compose(
    withOnClickSetAngle,
    withPrimaryColor,
    withLargeSize
)(BaseButton)
