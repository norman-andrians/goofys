import React from "react";
import classNames from "classnames";

function PricingSwitch(props) {
    const isMonth = props.month;

    return <label className="pricing-switch">
        <div className="handle-bg" style={{ left: isMonth ? "0%" : "50%" }}></div>

        <div
            className={
                classNames('switch-handle', {
                    'handle-active' : isMonth
                }
            )
        }>
        Monthly</div>

        <div
            className={
                classNames('switch-handle', {
                    'handle-active' : !isMonth
                })
            }
            style={{
                left: "50%"
            }
        }>
        Yearly</div>

        <div className="discount">30% Off</div>
    </label>
}

export default PricingSwitch;