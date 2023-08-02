import React from "react";
import styles from "../ComponentStyles/DashBoard_rightSummary.module.css";

const DashBoard_rightSummary = () => {
  return (
    <div>
      
      {/* Orders */}
      <div
        className='OrderSummary'
        style={{
          flex: "1 1 0",
          height: 727,
          padding: 20,
          background: "white",
          borderRadius: 12,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "flex",
        }}>
        <div
          className='order31'
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 23,
            display: "flex",
          }}>
          <div
            className='RecentOrders'
            style={{
              alignSelf: "stretch",
              color: "#45464E",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Recent Orders
          </div>
          <div
            className='order30'
            style={{
              alignSelf: "stretch",
              height: 645,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 12,
              display: "flex",
            }}>
            <div
              className='Ordercard'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(245.44, 126.24, 118.63, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#CC5F5F",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order23'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(50, 147, 111, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#519C66",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order24'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(245.44, 126.24, 118.63, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#CC5F5F",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order25'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(50, 147, 111, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#519C66",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order26'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(50, 147, 111, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#519C66",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order27'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(50, 147, 111, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#519C66",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order28'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(245.44, 126.24, 118.63, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#CC5F5F",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order29'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(245.44, 126.24, 118.63, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#CC5F5F",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='order30'
              style={{
                alignSelf: "stretch",
                height: 61,
                paddingBottom: 12,
                borderBottom: "0.50px #F1F3F9 solid",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 10,
                display: "flex",
              }}>
              <div
                className='Container'
                style={{
                  alignSelf: "stretch",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 14,
                  display: "flex",
                }}>
                <img
                  className='Rectangle3'
                  style={{
                    width: 49,
                    height: 49,
                    borderRadius: 8,
                    border: "0.50px #F1F3F9 solid",
                  }}
                  src='/assets/iphone_color_1.png'
                  alt='iphone'
                />
                <div
                  className='Content'
                  style={{
                    flex: "1 1 0",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}>
                  <div
                    className='Top'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 215,
                      display: "flex",
                    }}>
                    <div
                      className='Iphone13'
                      style={{
                        color: "#45464E",
                        fontSize: 14,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}>
                      iPhone 13
                    </div>
                    <div
                      className='Right'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='Sept2022'
                        style={{
                          color: "#A6A8B1",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        12 Sept 2022
                      </div>
                    </div>
                  </div>
                  <div
                    className='Bottom'
                    style={{
                      alignSelf: "stretch",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 131,
                      display: "flex",
                    }}>
                    <div
                      className='order24'
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 9,
                        display: "flex",
                      }}>
                      <div
                        className='73000000X1'
                        style={{
                          color: "#33343A",
                          fontSize: 14,
                          fontFamily: "Inter",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}>
                        ₦730,000.00 x 1
                      </div>
                    </div>
                    <div
                      className='order25'
                      style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: "rgba(245.44, 126.24, 118.63, 0.12)",
                        borderRadius: 8,
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 10,
                        display: "flex",
                      }}>
                      <div
                        className='Pending'
                        style={{
                          color: "#CC5F5F",
                          fontSize: 12,
                          fontFamily: "Inter",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}>
                        Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard_rightSummary;
