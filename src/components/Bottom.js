import React from "react";
import styles from "../ComponentStyles/Bottom.module.css";

const Bottom = () => {
  return (
    <>
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
    </>
  );
};

export default Bottom;
