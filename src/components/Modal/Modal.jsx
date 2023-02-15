import styles from "./Modal.module.css";
import cross from "../../images/icons/cross.svg";
import React from "react";

function Modal({children, show, close, title}) {
    return (
        <React.Fragment>
            {show &&
                <div className={styles.container}>
                    <div className={styles.body}>
                        <div className={styles.close} onClick={close}>
                            <img src={cross} alt="cross" />
                        </div>
                        <div className="content">
                            { title &&
                                <div className={styles.title}>
                                    <h1>{title}</h1>
                                </div>
                            }
                            {children}
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default Modal;
