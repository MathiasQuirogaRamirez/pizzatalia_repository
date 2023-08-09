function ImageProduct (props) {

    const { onClick, url, size } = props;

    return (
        <img onClick={onClick} src={url} width={size} height={size}/>
    );
}

export default ImageProduct;