import { Row, Col } from "antd";
import styled from './CryptoExchange.module.css'
import { DUMMY_CURRENCIES } from "@/src/api/api";
import { useEffect, useState } from "react";

const CryptoExchange = () => {
  const [amount, setAmount] = useState<number>(null)
  const [total, setTotal] = useState<number>(0)
  const [selectedCurrency, setSelectedCurrency] = useState<string>('')

  function handleAmount (e: any) {
    setAmount(e.target.value)
  }


  useEffect(() => {
    setTotal(amount * 0.87)
    console.log(total)
  }, [amount])

  return (
    <div className={styled.cryptoExchange}>
      <Row>
        <Col lg={24}>
          <h1 id="main-heading">DataArt currency converter</h1>
          <p>Best source for currency conversion, sending money online and tracking exchange rates between colleagues</p>
            <div className={styled.exchangeContainer}>
              <h2>Converter</h2>
              <Row>
                <Col span={7} offset={1} className={styled.col}>
                  <label htmlFor="">Amount:</label>
                  <input type="number" name="amount" id="" onChange={handleAmount} />
                </Col>
                <Col span={7} offset={1} className={styled.col}>
                  <label htmlFor="">From:</label>
                <select name="from" id="">
                  {DUMMY_CURRENCIES.map(item => (
                    <option value="">{item}</option>
                  ))}
                </select>
                </Col>
                <Col span={7} offset={1} className={styled.col}>
                  <label htmlFor="">To:</label>
                  <select name="to" id="">
                  {DUMMY_CURRENCIES.map(item => (
                    <option value="">{item}</option>
                  ))}
                </select>
                </Col>
              </Row>
              <div className={styled.conversion}>
              <span id="converted">{total}€</span>
              </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default CryptoExchange;
