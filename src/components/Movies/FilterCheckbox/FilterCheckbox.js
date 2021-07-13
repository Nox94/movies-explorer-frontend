import '../../../common.css';
import './filterCheckbox.css'

function FilterCheckbox(props) {
    return (
        <>
            <div className="checkbox">
                <label className="checkbox__container">
                    <input className="checkbox__input" type="checkbox" checked={props.checked}
                           onChange={props.onShortCheck}/>
                    <span className="checkbox__slider round"/>
                </label>
                <p className="checkbox__text">
                    Короткометражки
                </p>
            </div>
        </>
    )
}

export default FilterCheckbox;
