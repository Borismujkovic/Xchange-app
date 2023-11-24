import styled from "./CryptoValue.module.css";

const CryptoValue = () => {
  return (
    <div className={styled.steps}>
      <h2>How to transfer money in 3 easy steps</h2>
      <div className={styled.step}>
        <div className={styled.singleStep}>
          <img src="https://freesvg.org/storage/img/thumb/1539986471.png" alt="" />
          <h3>1. Sign In</h3>
          <p>
            It takes just a few minutes, and all you need is an email address and password.
          </p>
        </div>
        <div className={styled.singleStep}>
          <img src="https://freesvg.org/storage/img/thumb/credit-card-front.png" alt="" />
          <h3>2. Enter details</h3>
          <p>
            Create offer 
          </p>
        </div>
        <div className={styled.singleStep}>
          <img src="https://freesvg.org/storage/img/thumb/Email-14.png" alt="" />
          <h3>3. Confirm and send</h3>
          <p>
            Check the currencies and amount are correct, get the expected
            delivery date, and send your money transfer.
          </p>
        </div>
      </div>
      <div className={styled.button}>
      <button>Get started</button>
      </div>
    </div>
  );
};

export default CryptoValue;
