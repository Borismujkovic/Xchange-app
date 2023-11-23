import { Row, Col } from "antd";
import styled from './CryptoExchange.module.css'

const CryptoExchange = () => {

  return (
    <div className={styled.cryptoExchange}>
      <Row>
        <Col lg={24}>
          <h1>Trusted Global Currency Converter & Money Transfer Solutions</h1>
          <p>Best source for currency conversion, sending money online and tracking exchange rates</p>
            <div className={styled.exchangeContainer}>
              <h2>Converter</h2>
              <Row>
                <Col span={7} offset={1} className={styled.col}>
                  <label htmlFor="">Amount:</label>
                  <input type="number" name="amount" id="" />
                </Col>
                <Col span={7} offset={1} className={styled.col}>
                  <label htmlFor="">From:</label>
                <select name="from" id="">
                  <option value="">GBP</option>
                  <option value="">EUR</option>
                </select>
                </Col>
                <Col span={7} offset={1} className={styled.col}>
                  <label htmlFor="">To:</label>
                  <select name="to" id="">
                  <option value="">GBP</option>
                  <option value="">EUR</option>
                </select>
                </Col>
              </Row>
              <div className={styled.conversion}>
              <span>0.00$</span>
              </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default CryptoExchange;
