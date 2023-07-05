import "./style.css";

function TitleSection (props) {

    return (
        <div className="container_title">
            <div className="title_div"></div><h3>{props.title}</h3><div className="title_div"></div>
        </div>
    );
}

export default TitleSection;