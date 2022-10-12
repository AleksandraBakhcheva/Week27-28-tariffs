import "../styles/index.css";

function Tariff(props) {

    return (
        <div>{props.isSelected}
            <h2 className="tariff__header">{props.header}</h2>
            <div className="tariff__price">
                <p className="tariff__currency">{props.currency}</p>
                <div className="tariff__amount">{props.amount}</div>
                <div className="tariff__period">{props.price}</div>
            </div>
            <div className="tariff__option">{props.option}</div>
            <div className="tariff__note">{props.note}</div>
        </div >
    );
}

export default Tariff;