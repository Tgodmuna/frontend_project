import React, { useState } from "react";
import styled from "styled-components";

//styled components
const StyledSection = styled.section`
    width: 18vw;
    height: 100vh;
    position: fixed; 
    background-color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    left: 0px; 

    /* logostyles */
    .logo {
        width: 123.49px; 
        height: 52px; 
        position: relative;
    
        .Logo_icon {
            margin-inline-end: 1.5rem;
            img {
                object-fit: contain;
                width: 43.33px; 
                height: 43.33px;
                position: relative;
            }
        }

        .Logo_Title {
            text-align: center;
            text-transform: capitalize;
            font-size: large;
            font-weight: 500;
        }
    }

    @media screen and (max-width: 768px) {
        .logo { 
            flex-direction: column;
            align-items: center;
            display: none; /
            .Logo_icon {
                margin-inline-end: 0;
                margin-bottom: 1rem;
            }
        }
    }

    /* menu items styles */
    .Menu_items {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 24px; 
        display: inline-flex; 

        width: auto;
        .items_container {
            flex-direction: column;
            justify-content: center;
            .items {
                display: flex;
                align-items: center;
                padding: 1rem;
                color: #333;
                font-size: 16px;
                cursor: pointer;
                text-transform: capitalize;
                font-size: large;
                font-weight: 300;
                :hover {
                    background-color: #f2f2f2;
                }

                img {
                    margin-right: 1rem;
                }

                :nth-child(1) img {
                    width: 30px;
                }

                :nth-child(2) img {
                    width: 30px;
                }

                :nth-child(3) img {
                    width: 25px;
                }

                :nth-child(4) img {
                    width: 30px;
                }

                :nth-child(5) img {
                    width: 30px;
                }
            }

            .Item_heading {
                background-color: #5570f1;
                width: 15rem;
                padding: 2px 5px 0 0;
                display: flex;
                align-items: center;
                list-style-type: none;
                border-radius: 20px;
                -webkit-border-radius: 20px;
                -moz-border-radius: 20px;
                -ms-border-radius: 20px;
                -o-border-radius: 20px;
                padding: 1rem;
                .title {
                    text-transform: uppercase;
                    font-size: large;
                    font-weight: 300;
                    color: white;
                    margin-top: 5px;
                }
                img {
                    margin-inline-end: 1.5rem;
                    margin-top: 3px;
                }
            }
        }
        /* Media query for smaller screens */
        @media screen and (max-width: 768px) {
            .Menu_items {
                margin: 3rem 10px;
                .Item_heading {
                    width: auto;
                }
            }
        }
    }

    /* Bottom */
    .Container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        .buttom_contactSupport {
            display: flex;
            margin: 0 0 1.9rem 1rem;
            background-color: #d5d5d6; 
            padding: 1rem;
            width: 19rem;
            border-radius: 5% 30%;
            -webkit-border-radius: 5% 30%;
            -moz-border-radius: 5% 30%;
            -ms-border-radius: 5% 30%;
            -o-border-radius: 5% 30%;
        }
        .buttom_contactSupport:hover {
            box-shadow: 5px 2px 10px 2px rgba(73, 80, 92, 0.328);
            cursor: pointer;
        }

        .buttom_contactSupport img {
            width: 25px;
            margin-inline-end: 2rem;
        }

        .buttom_contactSupport span:nth-child(2) {
            text-transform: uppercase;
            font-weight: 400;
        }
    }

    .gift {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background-color: #fff5e9; 
        width: 19rem;
        border-radius: 5% 40%;
        -webkit-border-radius: 5% 40%;
        -moz-border-radius: 5% 40%;
        -ms-border-radius: 5% 40%;
        -o-border-radius: 5% 40%;
        margin: 0 0 3rem 3px;
        :hover {
            box-shadow: 5px 2px 10px 2px hsla(10, 40%, 44%, 1);
            cursor: pointer;
        }
        img {
            width: 25px;
            margin-inline-end: 1rem;
        }

        > span:nth-child(2) {
            text-align: center;
            text-transform: uppercase;
        }
    }

    .gift_item2 {
        text-align: center;
        text-transform: capitalize;
        margin: 1.5rem 0px 1rem -9rem;
    }

    /* logout */
    .logout {
        margin: 0 0 0 2.5rem;
        display: flex;
        cursor: pointer;
        width: 19rem;
        padding: auto;

        > span:nth-child(2) {
            text-align: center;
            text-transform: uppercase;
        }
    }
`;


const Sidebar = () => {
  return (
    <>
      <StyledSection>
        <div className='toggle'></div>
        {/* logo */}{" "}
        <div className='logo'>
          <div className='Logo_icon' id={""}>
            <img className='Logo_icon' src='/assets/Graph.svg' alt='graph' />
          </div>

          <div className='Logo_Title' id={"Logo_title"}>
            <p>metrix</p>
          </div>
        </div>
      </div>
      {/* menu items */}
      <div
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 24,
          display: "inline-flex",
        }}>
        <div className={styles.Menu_items}>
          <div className={styles.Item_heading}>
            <span>
              <img src='/assets/category.png' width={30} alt='icon' />
            </span>
            <span className={styles.title}>Dashboard</span>
          </div>
          {/* list */}
          <ul
            className={styles.items_container}
            style={{
              paddingLeft: 40,
              gap: 16,
            }}>
            <li className={styles.items}>
              <span>
                <img src='/assets/icons8-order-100.png' alt='' />
              </span>
              orders
              <div
                className='ordernumber'
                style={{
                  height: 24,
                  paddingTop: 4,
                  paddingBottom: 5,
                  paddingLeft: 8,
                  paddingRight: 8,
                  background: "#FFCC91",
                  borderRadius: 500,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}>
                <div
                  style={{
                    textAlign: "center",
                    color: "#1C1D22",
                    fontSize: 12,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}>
                  3
                </div>
              </div>
            </li>
            <li className={styles.items}>
              <span>
                <img src='/assets/icons8-customer-50.png' alt='' />
              </span>
              customers
            </li>
            <li className={styles.items}>
              <span>
                <img src='/assets/icons8-folder-50.png' alt='' />
              </span>
              inventory
            </li>
            <li className={styles.items}>
              <span>
                <img src='/assets/icons8-conversation-50.png' alt='' />
              </span>
              conversation
              <div
                className='Frame2'
                style={{
                  height: 24,
                  paddingTop: 4,
                  paddingBottom: 5,
                  paddingLeft: 8,
                  paddingRight: 8,
                  background: "#FFCC91",
                  borderRadius: 500,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}>
                <div
                  style={{
                    textAlign: "center",
                    color: "#1C1D22",
                    fontSize: 12,
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}>
                  12
                </div>
              </div>
            </li>
            <li className={styles.items}>
              <span>
                <img src='/assets/icons8-settings-50.png' alt='' />
              </span>
              settings
            </li>
          </ul>
        </div>
      </div>
      {/* bottom */}
      <div className={styles.Container}>
        {/* contact support */}
        <div className={styles.buttom_contactSupport}>
          <span className={styles.icon}>
            <img src='/assets/icons8-headphone-24.png' alt='icon' />
          </span>
          <span className={styles.support_text}>contact support</span>
        </div>
        {/* gift */}
        <div className={styles.gift}>
          <div className={styles.gift_item1}>
            <span>
              <img src='/assets/icons8-gift-50.png' alt='icongift' />
            </span>
            <span>free gifts awaits you</span>
          </div>

          <div className={styles.gift_item2}>upgrade your account</div>
        </div>
        {/* log out */}
        <div className={styles.logout}>
          <span>
            <img src='/assets/icons8-logout-32.png' alt='iconLogout' />
          </span>
          <span>logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
