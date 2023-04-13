import React, { useState } from "react";

import PricingSwitch from "../switches/pricing-switch";
import PlanCard from "../cards/plan-card";
import ComparationTable from "../tables/comparation";

import Benefits from "../../data/pricing-benefits.json";
import Comparations from "../../data/comparation.json";

function Pricing() {
    const [ isMonth, setIsMonth ] = useState(true);

    const [ basicPrice, setBasic ] = useState(10);
    const [ proPrice, setPro ] = useState(25);
    const [ premiumPrice, setPremium ] = useState(50);

    const [ showComparation, setShowComp ] = useState(false);

    function toggleComparation() {
        setShowComp(!showComparation);
    }

    function togglePricingPlans() {
        switch (isMonth) {
            case false:
                setBasic(10);
                setPro(25);
                setPremium(50);
                break;
            case true:
                setBasic(35);
                setPro(85);
                setPremium(170);
                break;
        }

        setIsMonth(!isMonth);
    }

    return <main className="pricing my-3">
        <section className="text-center text-white">
            <header className="py-2">
                <h1 className="fw-bold ff-inter big-head">Select Your Plan</h1>
                <div className="ff-inter opacity-75">Take your time, choose the best plan that you need</div>
            </header>
            <label onClick={togglePricingPlans} className="my-4">
                <PricingSwitch month={isMonth} />
            </label>
        </section>
        <section className="text-center ff-inter my-5">
            <div className="opacity-75">Cancel anytime, <a href="#" className="link link-offset-2">Terms apply</a></div>
            <div className="d-flex my-5">
                <PlanCard
                    name={"Basic Plan"}
                    price={basicPrice}
                    unit={"month"}
                    desc={"Ideal for individual developers"}
                    benefits={Benefits.basic}
                />
                <PlanCard
                    name={"Pro Plan"}
                    price={proPrice}
                    unit={"month"}
                    desc={"Special for Indie team make the dream of creativity come true"}
                    benefits={Benefits.pro}
                    popular={true}
                />
                <PlanCard
                    name={"Basic Plan"}
                    price={premiumPrice}
                    unit={"month"}
                    desc={"Access success at scale for large organizations with ambitious goals."}
                    benefits={Benefits.premium}
                />
            </div>
        </section>
        <section className="container py-5 text-center">
            <div className="basic-dropdown" style={{ height: showComparation ? '900px' : '0px' }}>
                <ComparationTable
                    plans={Comparations.plans}
                    benefits={Comparations.benefits}
                />
            </div>
            <button
                className="text-primary d-flex align-items-center m-auto"
                style={{ background: 'none', border: 'none' }}
                onClick={toggleComparation}
                >
                <div className="">{showComparation ? <>Hide comparation</> : <>Compare all plans</>}</div>
                <div className="" style={{ transform: showComparation ? 'rotateZ(180deg)' : 'rotateZ(0deg)' }}>
                    <i class="bi bi-arrow-down-short h3"></i>
                </div>
            </button>
        </section>
    </main>
}

export default Pricing;