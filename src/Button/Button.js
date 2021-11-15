import './Button.scss';

const Button = ({buttonName, id}) => (
    <div className="button__wrapper">
        <button id={id}>{buttonName}</button>
    </div>
)

export default Button;