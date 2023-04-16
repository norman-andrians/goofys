import React from "react";
import classNames from "classnames";

function PlanCard (props) {
    const name = props.name;
    const price = props.price;
    const unit = props.unit;
    const desc = props.desc;
    const benefits = props.benefits;
    const popular = props.popular == null ? false : props.popular;

    return <div className={
            classNames(
                'plan-card',
                'container-fluid',
                'mx-2',
                'mx-xl-3',
                'mb-5',
                'mb-lg-0',
                {'plan-card-popular' : popular}
            )
        }>
        { popular && (
            <div className="p-mark ff-inter fw-bold">Popular</div>
        ) }
        <header>
            <h3 className={classNames('h3', 'fw-bold', 'ff-inter', {'text-primary' : !popular}, {'text-secondary' : popular})}>{name}</h3>
            <div className="mt-4">
                <h1 className="d-inline ff-inter fw-bold price">${price}</h1>
                <d className="d-inline ff-open-sans fw-bold opacity-75"> / {unit}</d>
            </div>
            <div className="ff-open-sans my-2 fs-6 fs-lg-7 opacity-75 desc">
                {desc}
            </div>
        </header>
        <section>
            {
                benefits.map((val) => 
                    <div className="check-list d-flex align-items-center">
                        <div className="h5 mb-0"><i class="bi bi-check"></i></div>
                        <div className="ff-open-sans fs-6 fs-lg-7 ms-2">{val}</div>
                    </div>
                )
            }
            <button className={classNames('btn', {'btn-primary' : !popular}, {'btn-secondary' : popular}, 'ff-open-sans', 'fw-bold', 'text-white')}>Choose Plan</button>
        </section>
    </div>;
}

export default PlanCard;