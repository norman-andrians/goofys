import React, { useState } from "react";

// Components
import PricingSwitch from "../switches/pricing-switch";
import PlanCard from "../cards/plan-card";
import ComparationTable from "../tables/comparation";
import FAQDropdown from "../dropdown/faqs-dropdown";

// Data(s)
import Benefits from "../../data/pricing-benefits.json";
import Comparations from "../../data/comparation.json";
import FAQs from "../../data/faqs.json";

// Images
import LogoUnity from "../../assets/images/Unity-logo 1.png";
import LogoUnreal from "../../assets/images/Unreal_Engine_Logo 1.png";
import LogoGodot from "../../assets/images/logo_small_monochrome_light 1.png";
import LogoGamemaker from "../../assets/images/GameMakerlogo 1.png";

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

    return <main className="container pt-8">
        <section className="text-center text-white">
            <header className="py-2">
                <h1 className="fw-bold ff-inter display-5">Select Your Plan</h1>
                <div className="ff-inter opacity-75">Take your time, choose the best plan that you need</div>
            </header>
            <label onClick={togglePricingPlans} className="my-4">
                <PricingSwitch month={isMonth} />
            </label>
        </section>
        <section className="text-center ff-inter mt-5">
            <div className="opacity-75">Cancel anytime, <a href="#" className="link link-offset-2">Terms apply</a></div>
            <div className="d-flex flex-column flex-lg-row mt-5 mb-4">
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
        <section className="container pb-5 text-center">
            <div className="basic-dropdown" style={{ height: showComparation ? '900px' : '0px', maxHeight: "900px" }}>
                <ComparationTable
                    plans={Comparations.plans}
                    benefits={Comparations.benefits}
                    style={{
                        opacity: showComparation ? 1 : 0,
                        transition: ".5s"
                    }}
                />
            </div>
            <button
                className="text-primary d-flex align-items-center m-auto"
                style={{ background: 'none', border: 'none' }}
                onClick={toggleComparation}
                >
                <div className="">{showComparation ? <>Hide comparation</> : <>Compare all plans</>}</div>
                <div className="" style={{
                    transform: showComparation ? 'rotateZ(180deg)' : 'rotateZ(0deg)',
                    transition: ".4s"
                    }}>
                    <i class="bi bi-arrow-down-short h3"></i>
                </div>
            </button>
        </section>
        <section className="pb-5 mt-3 mb-5 d-block d-sm-flex align-items-center justify-content-between text-center text-sm-start">
            <div className="ff-inter text-white-50 mb-4 mb-sm-0">Trusted by the best game engines</div>
            <div className="opacity-50 d-flex align-items-center">
                {
                    [LogoUnity, LogoUnreal, LogoGodot, LogoGamemaker].map((val) => 
                        <img src={val} alt="Game Engine" className="ms-4" style={{ height: "50px" }} />
                    )
                }
            </div>
        </section>
        <section className="py-5 my-5">
            <header className="text-center mb-5">
                <h1 className="h1 ff-inter fw-bold display-5">FAQs</h1>
                <p className="ff-inter opacity-75">Can't find the answer you're looking for? <a href="#" className="link link-offset-2">Contact us!</a></p>
            </header>
            <div className="">
                {
                    FAQs.map((val) => 
                        <FAQDropdown
                            question={val.question}
                            answer={val.answer}
                        />
                    )
                }
            </div>
        </section>
    </main>
}

export default Pricing;