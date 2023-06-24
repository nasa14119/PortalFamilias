import '../pages/css/pago.css';
import {useState, useRef, Fragment} from "react"; 
import validator from "validator"; 
const YEAR = new Date().getFullYear().toString().slice(2,4)
function PayForm() {
  const acces = useRef({
    number:false,
    month:false, 
    year:false, 
    cvc:false,
    name:false, 
  });
  const [haveAcces, LevelAcces] = useState(false)
  const [error, setError] = useState({
    number:"",
    month: "", 
    year:  "", 
    cvc:   "",
    name:  "", 
  }); 
  const [cardNumber, setCardNumber] = useState("")
  const [cardMonth, setMonth] = useState("")
  const [cardYear, setYear] = useState("")
  const [CVC, setCVC] = useState(""); 
  const [name, setName] = useState(""); 
  const handleSubmit = (e) => {
    const months = ["01", "02", "03", "04","05", "06","07", "08", "09", "10", "11", "12"]
    e.preventDefault();
    acces.current = {
      number:validator.isNumeric(cardNumber),
      month: months.includes(cardMonth)
      && !validator.isEmpty(cardMonth), 
      year:validator.isNumeric(cardYear), 
      cvc:validator.isLength(CVC, [3,3]) && validator.isNumeric(CVC) && CVC.length < 4,
      name:validator.isAlpha(name,undefined, {ignore:" "}), 
    }
    for (const key in acces.current) {
      if (!acces.current[key]) {
        setError(prev => ({...prev, [key] :`error in ${key}`}))
      } else {
        setError(prev => ({...prev,[key] :""}))
      }
    }
    if(!acces.current.month){
      setError(prev => ({...prev, month:"error digits must be ej. 01"}))
    }
    if(Object.values(acces.current).every(value => value === true)){
      LevelAcces(true)
    }
  }
  const HaveAccesAnimation = () => {
    return (
      <div className="haveAcces">
          <h2>Muchas Gracias</h2>
          <p>hemos recibido el pago</p>
          <button onClick={()=> LevelAcces(false)}>Continue</button>
      </div>
    )
  }
  return (
    <Fragment>
      {!haveAcces ? (
        <form action="" className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Ouner">CARDHOLDER NAME</label>
            <input
              type="text"
              data-error={error.name !== ""}
              id="Ouner"
              placeholder="John Dogh"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error.name !== "" && (
              <span className='error_input'>
                {error.name}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="cardNumber">CARD NUMBER</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onClick={() => setCardNumber("")}
              maxLength={16}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="0000111122223333"
              data-error={error.number !== ""}
            />
            {error.number && (
              <span className='error_input'>
                {error.number}
              </span>
            )}
          </div>
          <div className="small_inputs">
            <div>
              <label htmlFor="exp">EXP.DATE(MM/YY)</label>
              <input
                type="number"
                data-error={error.month !== ""}
                id="exp"
                placeholder="MM"
                value={cardMonth}
                maxLength={2}
                max={12}
                onChange={(e) => setMonth(e.target.value)}
                onBlur={() =>
                  cardMonth > 12 || cardMonth === "" ? setMonth("MM") : ""
                }
              />
              {error.month && (
                <span className="error_input error_input_month" id="error_month">
                  {error.month}
                </span>
              )}
              <input
                type="number"
                data-error={error.year !== ""}
                id="exp"
                placeholder="YY"
                value={cardYear}
                onChange={(e) => setYear(e.target.value)}
                min={Number(YEAR)}
                onBlur={() =>
                  cardYear < Number(YEAR) || cardYear === ""
                    ? setYear("YY")
                    : ""
                }
              />
              {error.year && (
                <span className="error_input error_input_year" id="error error_year">
                  {error.year}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="CVC">CVC</label>
              <input
                type="text"
                id="CVC"
                placeholder="eg. 134"
                value={CVC}
                onChange={(e) => setCVC(e.target.value)}
                data-error={error.cvc !== ""}
              />
              {error.cvc && (
                <span className="error_input error_input_cvc" id="error_cvc">
                  {error.cvc}
                </span>
              )}
            </div>
          </div>
          <span className="Submit">
            <button type="submit">Enviar</button>
          </span>
        </form>
      ) : (
        <HaveAccesAnimation />
      )}
    </Fragment>
  );
}

export default PayForm;
