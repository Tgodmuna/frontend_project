import React from 'react'
import styled from "styled-components";

const DashboardSummaryCard1 = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SummaryContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  background: rgba(85, 112, 241, 0.12);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-right: 182px;
  }
`;

const IconlyLightGraph = styled.div`
  flex: 1 1 0;
  padding: 1.75px 1.92px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Graph = styled.div`
  width: 16.16px;
  height: 16.54px;
  position: relative;

  .Stroke1 {
    width: 13.44px;
    height: 13.37px;
    left: 0;
    top: 3.17px;
    position: absolute;
    border: 0.75px #5570f1 solid;
  }

  .Stroke3 {
    width: 7.43px;
    height: 7.32px;
    left: 8.73px;
    top: 0;
    position: absolute;
    border: 0.75px #5570f1 solid;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Frame15 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Frame13 = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

const Frame14 = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

const Customers = styled.div`
  color: #8b8d97;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const Active = styled.div`
  color: #8b8d97;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const Frame12 = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const Amount = styled.div`
  color: #45464e;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 500;
  word-wrap: break-word;
`;

const Percentage = styled.div`
  color: #519c66;
  font-size: 12px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const DashboardCard1 = () => {
  return (
    <DashboardSummaryCard1>
      <SummaryContainer>
        <div className='Summaryheading'>
          <Icon>
            <IconlyLightGraph>
              <Graph>
                <div className='Stroke1'></div>
                <div className='Stroke3'></div>
              </Graph>
            </IconlyLightGraph>
          </Icon>
          <Filter>
            <div className='ThisWeek'>This Week</div>
            <div className='FiChevronDown'>
              <div className='Vector'></div>
            </div>
          </Filter>
        </div>
        <Frame15>
          <Frame13>
            <Customers>Sales</Customers>
            <Frame12>
              <Amount>₦4,000,000.00</Amount>
            </Frame12>
          </Frame13>
          <Frame14>
            <Active>Volume</Active>
            <Frame12>
              <Amount>450</Amount>
              <Percentage>+20.00%</Percentage>
            </Frame12>
          </Frame14>
        </Frame15>
      </SummaryContainer>
    </DashboardSummaryCard1>
  );
};

export default DashboardCard1;
