import "./style.css";

function Button (props) {

    const {text, onClick} = props;

    return (
        <div onClick={onClick} className="button">{text}</div>
    );
}

export default Button;