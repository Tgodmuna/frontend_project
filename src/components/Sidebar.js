import React, { useState } from "react";
// import Logo from "./Logo";
import MenuItems from "./Menu_items";
import Bottom from "./Bottom";
import styles from ''

const Sidebar = () => {
 
// side bar style
  const sidebarStyle = { 
    width: 296,
    height: 1024,
    position: "relative",
    background: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
  };

  

  return (
    <div style={sidebarStyle}>
      {/* logo */}
      <div style={{ width: 123.49, height: 52, position: "relative" }}>
        <div className={styles.Logo}>
          <div
            className={styles.Logo_icon}
            id={""}
            style={{ width: 43.33, height: 43.33, position: "relative" }}>
            <img src='/assets/Graph.svg' alt='graph' />
          </div>

          <div className={styles.Logo_Title} id={"Logo_title"}>
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
