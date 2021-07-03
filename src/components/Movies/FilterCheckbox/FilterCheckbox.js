import '../../../common.css';
import './filterCheckbox.css'

function FilterCheckbox() {
    return (
        <>
            <div className="checkbox">
                <label className="checkbox__container">
                    <input className="checkbox__input" type="checkbox" defaultChecked={true}/>
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
