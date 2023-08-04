import React from "react";

import styled from "styled-components";

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

const Customers = styled.div`
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

const Active = styled.div`
  color: #8b8d97;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 400;
  word-wrap: break-word;
`;

const DashBoardCard2 = () => {
  return (
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
          <Customers>Customers</Customers>
          <Frame12>
            <div>1,250</div>
            <div>+15.80%</div>
          </Frame12>
        </Frame13>
        <Frame14>
          <Active>Active</Active>
          <Frame12>
            <div>1,180</div>
            <div>85%</div>
          </Frame12>
        </Frame14>
      </Frame15>
    </DashboardSummaryCard>
  );
};

export default DashBoardCard2;
