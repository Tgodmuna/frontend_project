import React from "react";
import styles from "../ComponentStyles/TopnavBar.module.css";

const TopNavBar = () => {
  return (
    <div>
      <div className={styles.Topnav}>
        <div
          className={styles.Navcontainer}
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}>
          {/* child nav1 */}
          <div
            className={styles.Childnav1}
            style={{
              color: "#45464E",
              fontSize: "20px",
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}>
            Dashboard
          </div>
          {/* child nav2 */}
          <div
            className={styles.Childnav2}
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
              display: "flex",
            }}>
            <div
              className='Icon'
              style={{
                alignSelf: "stretch",
                paddingLeft: "12px",
                paddingRight: "12px",
                paddingTop: "5px",
                paddingBottom: "5px",
                background: "#FEF5EA",
                borderRadius: "8px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                display: "inline-flex",
              }}>
              <div
                className='UserNameHolder'
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "20px",
                  display: "inline-flex",
                }}>
                <div
                  className='NannySShop'
                  style={{
                    color: "#1C1D22",
                    fontSize: "14px",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}>
                  Nanny’s Shop
                </div>
              </div>
            </div>

            <div
              className='NotificationContainer'
              style={{
                width: "20px",
                height: "20px",
                paddingLeft: "2.92px",
                paddingRight: "2.92px",
                paddingTop: "1.67px",
                paddingBottom: "1.67px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}>
              <div
                className='Notification'
                style={{
                  width: "14.17px",
                  height: "16.67px",
                  position: "relative",
                }}>
                <span>
                  <img src='/assets/icons8-bell-24.png' alt='' />
                </span>
              </div>
            </div>
            {/* avater */}
            <img
              className={styles.profilepic}
              style={{ width: "32px", height: "32px", borderRadius: "8px" }}
              src='/assets/profilePics.jpg'
              alt='profileAvater'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
