import React from 'react'

import styled from "styled-components";

const DashboardSummaryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  flex: 1 1 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    justify-items: center;
  }
`;

const DashboardSummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1 1 0;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const SummaryHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 182px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  background: rgba(255, 204, 145, 0.16);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame15 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Frame13 = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const AllOrders = styled.div`
  color: #8b8d97;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 400;
  word-wrap: break-word;
`;

const Frame12 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const Frame14 = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Pending = styled.div`
  color: #8b8d97;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 400;
  word-wrap: break-word;
`;

const Completed = styled.div`
  color: #8b8d97;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 400;
  word-wrap: break-word;
`;

const DashBoardCard3 = () => {
  return (
    <DashboardSummaryCardContainer>
      <DashboardSummaryCard>
        <SummaryHeading>
          <Icon>{/* Your SVG or icon component */}</Icon>
          <div>
            <div>This Week</div>
            <div>
              <img src='/assets/chevron-down.png' alt='chevron' />
            </div>
          </div>
        </SummaryHeading>
        <Frame15>
          <Frame13>
            <AllOrders>All Orders</AllOrders>
            <Frame12>
              <div>450</div>
              <div className='000'>+0.00%</div>
            </Frame12>
          </Frame13>
          <Frame14>
            <Pending>Pending</Pending>
            <Frame12>
              <div>5</div>
              <div className='000'>+0.00%</div>
            </Frame12>
          </Frame14>
          <Frame15>
            <Completed>Completed</Completed>
            <Frame12>
              <div>445</div>
              <div className='000'>+0.00%</div>
            </Frame12>
          </Frame15>
        </Frame15>
      </DashboardSummaryCard>

      <DashboardSummaryCard style={{ gridColumn: "span 2" }}>
        {/* This card will span across the end right */}
        {/* ... */}
      </DashboardSummaryCard>
    </DashboardSummaryCardContainer>
  );
};


export default DashBoardCard3