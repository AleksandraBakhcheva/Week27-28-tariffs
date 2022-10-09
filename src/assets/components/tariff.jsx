import "../styles/index.css";

function Tariff(props) {

    return (
        <div>
            <h2 className="tariff__header">{`Безлимитный ${props.amount}`}</h2>
            <div className="tariff__price">
                <p className="tariff__currency">{"руб"}</p>
                <div className="tariff__amount">{props.amount}</div>
                <div className="tariff__period">{`/мес`}</div>
            </div>
            <div className="tariff__option">{`до ${props.option} Мбит/сек`}</div>
            <div className="tariff__note">
                <p>{`Объем включенного`}</p>
                <p>{`трафика не ограничен`}</p>
            </div>
        </div >
    );
}

export default Tariff;