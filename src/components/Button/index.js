import {ButtonContainer} from './styles';

const Button = (props) => {
    let classes = ''
    classes += (props.double ? 'double' : '');
    classes += (props.triple ? 'triple' : '');

    return (
        <ButtonContainer onClick={() => props.onClick && props.onClick(props.label)} type="button"
                         className={classes}>
            {props.label}
        </ButtonContainer>
    );
}

export default Button;