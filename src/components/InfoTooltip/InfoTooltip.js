import failImg from "../../images/fail.png";
import successImg from "../../images/success.png";
//два раза выйти из каталога -> ../../
import '../../common.css';

export default function InfoTooltip(props) {
    const style = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        heading: {
            textAlign: "center",
        },
        image: {
            height: "120px",
            width: "120px",
            marginBottom: "32px",
        },
        // content: {
        //     // paddingTop: "60px",
        //     // paddingBottom: "60px",
        // },
    };

    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`}>
            <div className="popup__content">
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                    onClick={props.onClose}
                />

                <div style={style.wrapper}>
                    <img
                        style={style.image}
                        className="popup__image"
                        alt="#"
                        src={props.status === "success" ? successImg : failImg}
                    />
                    <h2 style={style.heading} className="popup__heading">
                        {props.message !== '' ? props.message : props.status === "success"
                            ? "Выполнено успешно."
                            : "Что-то пошло не так! Попробуйте ещё раз."}
                    </h2>
                </div>
            </div>
        </div>
    );
}
