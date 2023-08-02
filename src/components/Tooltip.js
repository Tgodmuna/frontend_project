import React from "react";
import styles from "../ComponentStyles/OrderSummary.module.css";

const Tooltip = ({ value,week }) => <div className={ styles.tooltip }>{ `${value}K ,
made on ${week}`}</div>;

export default Tooltip;
