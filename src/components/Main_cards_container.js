/* eslint-disable react/jsx-pascal-case */
import React from "react";
import ContainerCard_2 from "./ContainerCard_2";
import styles from "../ComponentStyles/Main_cards_container.module.css";

const Main_cards_container = () => {

  return (
    <div>
      <div className={styles.leftSide}>
        <div style={{ display: "flex" }}>
          <div className={styles.DashboardSummaryCard}>
            <div
              className='Summarycontainer'
              style={{
                alignSelf: "stretch",
                flex: "1 1 0",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Summaryheading'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 182,
                  display: "flex",
                }}>
                <div
                  className='Icon'
                  style={{
                    width: 36,
                    height: 36,
                    padding: 8,
                    background: "rgba(85, 112, 241, 0.12)",
                    borderRadius: 8,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}>
                  <div
                    className='IconlyLightGraph'
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingTop: 1.75,
                      paddingBottom: 1.71,
                      paddingLeft: 1.92,
                      paddingRight: 1.92,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                    <div
                      className='Graph'
                      style={{
                        width: 16.16,
                        height: 16.54,
                        position: "relative",
                      }}>
                      <div
                        className='Stroke1'
                        style={{
                          width: 13.44,
                          height: 13.37,
                          left: 0,
                          top: 3.17,
                          position: "absolute",
                          border: "0.75px #5570F1 solid",
                        }}></div>
                      <div
                        className='Stroke3'
                        style={{
                          width: 7.43,
                          height: 7.32,
                          left: 8.73,
                          top: 0,
                          position: "absolute",
                          border: "0.75px #5570F1 solid",
                        }}></div>
                    </div>
                  </div>
                </div>
                <div
                  className='Filter'
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 7,
                    display: "flex",
                  }}>
                  <div
                    className='ThisWeek'
                    style={{
                      color: "#BEC0CA",
                      fontSize: 12,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    This Week
                  </div>
                  <div
                    className='FiChevronDown'
                    style={{ width: 16, height: 16, position: "relative" }}>
                    <div
                      className='Vector'
                      style={{
                        width: 8,
                        height: 4,
                        left: 4,
                        top: 6,
                        position: "absolute",
                        border: "1px #BEC0CA solid",
                      }}></div>
                  </div>
                </div>
              </div>
              <div
                className='Frame15'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "flex",
                }}>
                <div
                  className='Frame13'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='Customers'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    Sales
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      ₦4,000,000.00
                    </div>
                  </div>
                </div>
                <div
                  className='Frame14'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='Active'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    Volume
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      450
                    </div>
                    <div
                      className='000'
                      style={{
                        color: "#519C66",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      +20.00%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DashboardSummaryCard}>
            <div
              className='Summarycontainer'
              style={{
                alignSelf: "stretch",
                flex: "1 1 0",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 32,
                display: "flex",
              }}>
              <div
                className='Summaryheading'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 182,
                  display: "flex",
                }}>
                <div
                  className='Icon'
                  style={{
                    width: 36,
                    height: 36,
                    padding: 8,
                    background: "rgba(255, 204, 145, 0.16)",
                    borderRadius: 8,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}>
                  <div
                    className='IconlyLight2User'
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingTop: 2.71,
                      paddingBottom: 2.66,
                      paddingLeft: 2.29,
                      paddingRight: 2.31,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                    <div
                      className='User'
                      style={{
                        width: 15.4,
                        height: 14.63,
                        position: "relative",
                      }}>
                      <div
                        className='Stroke1'
                        style={{
                          width: 11.4,
                          height: 4.67,
                          left: 0,
                          top: 9.96,
                          position: "absolute",
                          border: "0.75px #1C1D22 solid",
                        }}></div>
                      <div
                        className='Stroke3'
                        style={{
                          width: 7.31,
                          height: 7.31,
                          left: 2.05,
                          top: 0,
                          position: "absolute",
                          border: "0.75px #1C1D22 solid",
                        }}></div>
                      <div
                        className='Stroke5'
                        style={{
                          width: 2.36,
                          height: 5.43,
                          left: 11.44,
                          top: 0.93,
                          position: "absolute",
                          border: "0.75px #1C1D22 solid",
                        }}></div>
                      <div
                        className='Stroke7'
                        style={{
                          width: 2.19,
                          height: 2.9,
                          left: 13.2,
                          top: 9.57,
                          position: "absolute",
                          border: "0.75px #1C1D22 solid",
                        }}></div>
                    </div>
                  </div>
                </div>
                <div
                  className='Filter'
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 7,
                    display: "flex",
                  }}>
                  <div
                    className='ThisWeek'
                    style={{
                      color: "#BEC0CA",
                      fontSize: 12,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    This Week
                  </div>
                  <div
                    className='FiChevronDown'
                    style={{ width: 16, height: 16, position: "relative" }}>
                    <div
                      className='Vector'
                      style={{
                        width: 8,
                        height: 4,
                        left: 4,
                        top: 6,
                        position: "absolute",
                        border: "1px #BEC0CA solid",
                      }}></div>
                  </div>
                </div>
              </div>
              <div
                className='Frame15'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "flex",
                }}>
                <div
                  className='Frame13'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='Customers'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    Customers
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      1,250
                    </div>
                    <div
                      className='000'
                      style={{
                        color: "#519C66",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      +15.80%
                    </div>
                  </div>
                </div>
                <div
                  className='Frame14'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='Active'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    Active
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      1,180
                    </div>
                    <div
                      className='000'
                      style={{
                        color: "#519C66",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      85%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.DashboardSummaryCard}>
            <div className='Summarycontainer'>
              <div
                className='Summaryheading'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 182,
                  display: "flex",
                }}>
                <div
                  className='Icon'
                  style={{
                    width: 36,
                    height: 36,
                    padding: 8,
                    background: "rgba(255, 204, 145, 0.16)",
                    borderRadius: 8,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}>
                  <div
                    className='IconlyLightBag'
                    style={{
                      flex: "1 1 0",
                      alignSelf: "stretch",
                      paddingTop: 1.9,
                      paddingBottom: 2.08,
                      paddingLeft: 2.75,
                      paddingRight: 2.18,
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                    <div
                      className='Bag'
                      style={{
                        width: 15.07,
                        height: 16.02,
                        position: "relative",
                      }}>
                      <div
                        className='Path33955'
                        style={{
                          width: 15.07,
                          height: 12.23,
                          left: 0,
                          top: 3.78,
                          position: "absolute",
                          border: "0.75px #130F26 solid",
                        }}></div>
                      <div
                        className='Path33956'
                        style={{
                          width: 7.22,
                          height: 3.6,
                          left: 3.91,
                          top: 0,
                          position: "absolute",
                          border: "0.75px #130F26 solid",
                        }}></div>
                      <div
                        className='Line192'
                        style={{
                          width: 0.76,
                          height: 0.76,
                          left: 9.6,
                          top: 6.97,
                          position: "absolute",
                          border: "0.75px #130F26 solid",
                        }}></div>
                      <div
                        className='Line193'
                        style={{
                          width: 0.76,
                          height: 0.76,
                          left: 4.74,
                          top: 6.97,
                          position: "absolute",
                          border: "0.75px #130F26 solid",
                        }}></div>
                    </div>
                  </div>
                </div>
                <div
                  className='Filter'
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 7,
                    display: "flex",
                  }}>
                  <div
                    className='ThisWeek'
                    style={{
                      color: "#BEC0CA",
                      fontSize: 12,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    This Week
                  </div>
                  <div
                    className='FiChevronDown'
                    style={{ width: 16, height: 16, position: "relative" }}>
                    <div
                      className='Vector'
                      style={{
                        width: 8,
                        height: 4,
                        left: 4,
                        top: 6,
                        position: "absolute",
                        border: "1px #BEC0CA solid",
                      }}></div>
                  </div>
                </div>
              </div>
              <div
                className='Frame15'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "flex",
                }}>
                <div
                  className='Frame13'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='AllOrders'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    All Orders
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      450
                    </div>
                    <div
                      className='000'
                      style={{
                        opacity: 0,
                        color: "#519C66",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      +0.00%
                    </div>
                  </div>
                </div>
                <div
                  className='Frame14'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='Pending'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    Pending
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      5
                    </div>
                    <div
                      className='000'
                      style={{
                        opacity: 0,
                        color: "#519C66",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      +0.00%
                    </div>
                  </div>
                </div>
                <div
                  className='Frame15'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "flex",
                  }}>
                  <div
                    className='Completed'
                    style={{
                      color: "#8B8D97",
                      fontSize: 14,
                      fontFamily: "Inter",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}>
                    Completed
                  </div>
                  <div
                    className='Frame12'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      style={{
                        color: "#45464E",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}>
                      445
                    </div>
                    <div
                      className='000'
                      style={{
                        opacity: 0,
                        color: "#519C66",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      +0.00%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContainerCard_2 />
      </div>
    </div>
  );
};

export default Main_cards_container;
