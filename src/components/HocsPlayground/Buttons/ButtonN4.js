/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withSmallSize from '../hocs/withSmallSize';
import withDefaultColor from '../hocs/withDefaultColor';
import withOnClickDecreaseCounter from '../hocs/withOnClickDecreaseCounter';
import withDecCounter from '../hocs/withDecCounter';


export default compose(
    withOnClickDecreaseCounter,
    withDecCounter,
    withDefaultColor,
    withSmallSize
)(BaseButton)
