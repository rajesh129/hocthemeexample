import './Input.scss';

const Input = ({type, id, value, fieldName}) => (
    <div className="input-field">
        <label for={id}>{fieldName}</label>
        <input type={type} id={id} value={value} />
    </div>
)

export default Input;