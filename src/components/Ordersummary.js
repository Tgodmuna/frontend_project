import React, { useState } from "react";
import styles from "../ComponentStyles/OrderSummary.module.css";
import { Datacontext } from "../App";
import { useContext, useMemo } from "react";
import Tooltip from "./Tooltip";

const BarChart = () => {
  const data = useContext(Datacontext);
  const [hoveredValue, setHoveredValue] = useState(null);

  const maxValue = useMemo(() => {
    return Math.max(...data.map((item) => item.value));
  }, [data]);

  const handleBarHover = (value, week) => {
    setHoveredValue({ value, week });
  };

  return (
    <div className={styles["bar-chart"]}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.bar}
          style={{ height: `${(item.value / maxValue) * 100}%` }}
          onMouseEnter={() => handleBarHover(item.value, item.week)}
          onMouseLeave={() => handleBarHover(null)}>
          <div className={styles["bar-label"]}>{item.week}</div>
          {hoveredValue && hoveredValue.value === item.value && (
            <Tooltip value={hoveredValue.value} week={hoveredValue.week} />
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(BarChart);
