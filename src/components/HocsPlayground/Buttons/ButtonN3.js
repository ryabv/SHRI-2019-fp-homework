/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withOnClickIncreaseCounter from '../hocs/withOnClickIncreaseCounter';
import withCounter from '../hocs/withCounter';


export default compose(
    withOnClickIncreaseCounter,
    withCounter,
    withPrimaryColor,
    withSmallSize
)(BaseButton)
