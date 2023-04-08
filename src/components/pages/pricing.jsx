import React, { useState } from "react";
import PricingSwitch from "../switches/pricing-switch";

function Pricing() {
    const [ isMonth, setIsMonth ] = useState(true);

    const [ basicPrice, setBasic ] = useState(10);
    const [ proPrice, setPro ] = useState(25);
    const [ premiumPrice, setPremium ] = useState(50);

    function togglePricingPlans() {
        setIsMonth(!isMonth);
    }

    return <main className="pricing my-3">
        <section className="text-center text-white">
            <h1 className="h1 fw-bold ff-inter">Select Your Plan</h1>
            <div className="ff-inter opacity-75">Take your time, choose the best plan that you need</div>
            <label onClick={togglePricingPlans} className="my-4">
                <PricingSwitch month={isMonth} />
            </label>
        </section>
    </main>
}

export default Pricing;