/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styles from "../ComponentStyles/ContainerCard_2.module.css";
import BarChart from "./Ordersummary";
const ContainerCard_2 = () => {
  return (
    <div className='main'>
      <div className={styles.left}>
        {/* top container */}
        <div
          className='Top'
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 20,
            display: "flex",
            margin:'1rem 1rem'
          }}>
          <div
            className='Barchart'
            style={{
              width: 321,
              alignSelf: "stretch",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 21,
              paddingBottom: 21,
              background: "white",
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "flex",
            }}>
            <div
              className='Content'
              style={{
                flex: "1 1 0",
                height: 291,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 24,
                display: "inline-flex",
              }}>
              <div
                className='Top'
                style={{
                  alignSelf: "stretch",
                  height: 44,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 12,
                  display: "flex",
                }}>
                <div
                  className='Frame34'
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 12,
                    display: "inline-flex",
                  }}>
                  <div
                    className='Marketting'
                    style={{
                      color: "#45464E",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}>
                    Marketting
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
                      style={{
                        width: 16,
                        height: 16,
                        position: "relative",
                      }}>
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
                  className='Keycontainer'
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 23,
                    display: "inline-flex",
                  }}>
                  <div
                    className='Key'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      display: "flex",
                    }}>
                    <div
                      className='Rectangle4'
                      style={{
                        width: 8,
                        height: 8,
                        background: "#5570F1",
                        borderRadius: 6,
                      }}
                    />
                    <div
                      className='Acquisition'
                      style={{
                        color: "#A6A8B1",
                        fontSize: 11,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      Acquisition
                    </div>
                  </div>
                  <div
                    className='Key'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      display: "flex",
                    }}>
                    <div
                      className='Rectangle4'
                      style={{
                        width: 8,
                        height: 8,
                        background: "#97A5EB",
                        borderRadius: 6,
                      }}
                    />
                    <div
                      className='Purchase'
                      style={{
                        color: "#A6A8B1",
                        fontSize: 11,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      Purchase
                    </div>
                  </div>
                  <div
                    className='Key'
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      display: "flex",
                    }}>
                    <div
                      className='Rectangle4'
                      style={{
                        width: 8,
                        height: 8,
                        background: "#FFCC91",
                        borderRadius: 6,
                      }}
                    />
                    <div
                      className='Retention'
                      style={{
                        color: "#A6A8B1",
                        fontSize: 11,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      Retention
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='Group2'
                style={{ width: 205, height: 205, position: "relative" }}>
                <div
                  className='Ellipse1'
                  style={{
                    width: 205,
                    height: 205,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#EEF0FA",
                    borderRadius: 9999,
                  }}
                />
                <div
                  className='Ellipse3'
                  style={{
                    width: 172,
                    height: 172,
                    left: 17,
                    top: 17,
                    position: "absolute",
                    background: "#FFCC91",
                    borderRadius: 9999,
                  }}
                />
                <div
                  className='Ellipse4'
                  style={{
                    width: 172,
                    height: 172,
                    left: 17,
                    top: 17,
                    position: "absolute",
                    background: "#97A5EB",
                    borderRadius: 9999,
                  }}
                />
                <div
                  className='Ellipse2'
                  style={{
                    width: 172,
                    height: 172,
                    left: 17,
                    top: 17,
                    position: "absolute",
                    background: "#5570F1",
                    borderRadius: 9999,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className='Right'
            style={{
              flex: "1 1 0",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 19,
              display: "inline-flex",
            }}>
            <div
              className='DashboardSummaryCard'
              style={{
                alignSelf: "stretch",
                height: 159,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 11,
                paddingBottom: 11,
                background: "#5570F1",
                borderRadius: 12,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
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
                    display: "inline-flex",
                  }}>
                  <div
                    className='Icon'
                    style={{
                      width: 36,
                      height: 36,
                      padding: 8,
                      background: "rgba(255, 255, 255, 0.16)",
                      borderRadius: 8,
                      overflow: "hidden",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}>
                    <div
                      className='IconlyLightFolder'
                      style={{
                        flex: "1 1 0",
                        alignSelf: "stretch",
                        paddingTop: 1.88,
                        paddingBottom: 2.15,
                        paddingLeft: 1.87,
                        paddingRight: 2.13,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "inline-flex",
                      }}>
                      <div
                        className='Folder'
                        style={{
                          width: 16,
                          height: 15.97,
                          position: "relative",
                        }}>
                        <div
                          className='Stroke1'
                          style={{
                            width: 16,
                            height: 15.97,
                            left: 0,
                            top: 0,
                            position: "absolute",
                            border: "0.75px white solid",
                          }}></div>
                        <div
                          className='Stroke3'
                          style={{
                            width: 7.28,
                            height: 0.83,
                            left: 4.36,
                            top: 9.76,
                            position: "absolute",
                            border: "0.75px white solid",
                          }}></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='Filter'
                    style={{
                      opacity: 0,
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 7,
                      display: "flex",
                    }}>
                    <div
                      className='ThisWeek'
                      style={{
                        color: "#DBDEEE",
                        fontSize: 12,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      This Week
                    </div>
                    <div
                      className='FiChevronDown'
                      style={{
                        width: 16,
                        height: 16,
                        paddingLeft: 4,
                        paddingRight: 4,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}>
                      <div
                        className='Vector'
                        style={{
                          width: 8,
                          height: 4,
                          border: "1px #DBDEEE solid",
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
                    display: "inline-flex",
                  }}>
                  <div
                    className='Frame13'
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "inline-flex",
                    }}>
                    <div
                      className='Customers'
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      All Products
                    </div>
                    <div
                      className='Frame12'
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 7,
                        display: "inline-flex",
                      }}>
                      <div
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        45
                      </div>
                      <div
                        className='000'
                        style={{
                          opacity: 0,
                          color: "#DBDEEE",
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
                      display: "inline-flex",
                    }}>
                    <div
                      className='Active'
                      style={{
                        color: "white",
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
                        display: "inline-flex",
                      }}>
                      <div
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        32
                      </div>
                      <div
                        className='000'
                        style={{
                          color: "#DBDEEE",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        +24%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='DashboardSummaryCard'
              style={{
                alignSelf: "stretch",
                height: 159,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 11,
                paddingBottom: 11,
                background: "white",
                borderRadius: 12,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
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
                    display: "inline-flex",
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
                      className='FiShoppingCart'
                      style={{
                        width: 20,
                        height: 20,
                        position: "relative",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "flex",
                      }}>
                      <div
                        className='Vector'
                        style={{
                          width: 18.33,
                          height: 12.5,
                          border: "1px black solid",
                        }}></div>
                      <div
                        className='Vector'
                        style={{
                          width: 1.67,
                          height: 1.67,
                          border: "1px black solid",
                        }}></div>
                      <div
                        className='Vector'
                        style={{
                          width: 1.67,
                          height: 1.67,
                          border: "1px black solid",
                        }}></div>
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
                      style={{
                        width: 16,
                        height: 16,
                        position: "relative",
                      }}>
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
                    display: "inline-flex",
                  }}>
                  <div
                    className='Frame13'
                    style={{
                      flex: "1 1 0",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "inline-flex",
                    }}>
                    <div
                      className='Customers'
                      style={{
                        color: "#CC5F5F",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      Abandoned Cart
                    </div>
                    <div
                      className='Frame12'
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 7,
                        display: "inline-flex",
                      }}>
                      <div
                        style={{
                          color: "#45464E",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        20%
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
                      display: "inline-flex",
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
                      Customers
                    </div>
                    <div
                      className='Frame12'
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 7,
                        display: "inline-flex",
                      }}>
                      <div
                        style={{
                          color: "#45464E",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        30
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
        </div>

        {/* down container */}
        <div className={styles.BarChartNav}>
          <div className={styles.navbaHr}>
            <h1>summary</h1>
            <div className={styles.selectContainer}>
              <select name='' id=''>
                <option value='Sales'>Sales</option>
              </select>
            </div>
            <div className={styles.selectContainer2}>
              <select name='' id=''>
                <option value='Sales'>Last 7 Days</option>
              </select>
            </div>
          </div>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default ContainerCard_2;
