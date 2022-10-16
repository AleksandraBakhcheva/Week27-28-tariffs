import "../styles/index.css";

function Tariff(props) {
    const {isSelected, header, currency, amount, price, option, note} = props;

    return (
        <div className={isSelected ? "selected" : undefined}>
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