import React from "react";
import styles from "../ComponentStyles/Menu_items_styles.module.css";

const MenuItems = () => {
  return (
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
  );
};

export default MenuItems;
