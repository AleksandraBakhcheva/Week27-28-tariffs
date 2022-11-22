import "../styles/index.css";

function Tariff(props) {
    
    const {
            index,
            header, 
            currency, 
            amount, 
            price, 
            option, 
            note, 
            isActive, 
            onClick
        } = props;

        const handleClick = () => {
            onClick(index);
        }

        let className = "tariff tariff__";
            className += "" + index;

        if (isActive) {
            className += " selected";
        }
        
    return (
        <div onClick={handleClick} className={className}>
            <h2 className="tariff__header">{header}</h2>
            <div className="tariff__price">
                <p className="tariff__currency">{currency}</p>
                <div className="tariff__amount">{amount}</div>
                <div className="tariff__period">{price}</div>
            </div>
            <div className="tariff__option">{option}</div>
            <div className="tariff__note">{note}</div>
        </div>
    );
}

export default Tariff;