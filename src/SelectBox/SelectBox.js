import './SelectBox.scss';
const SelectBox = ({options, onSwitchTheme}) => {
    
    return (
        <select onChange={onSwitchTheme}>
            {options.map((option, i) => <option key={i}>{option}</option>)}
        </select>
    )
}

export default SelectBox;