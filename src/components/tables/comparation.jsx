import React from 'react';

function ComparationIconValue(props) {
    switch (props.val) {
        case 2: return <i class="bi bi-check-lg text-success h5"></i>; break;
        case 1: return <i class="bi bi-dash-lg text-warning h5"></i>; break;
        case 0: return <i class="bi bi-x-lg text-danger h6"></i>; break;
        default: return <div className="text-success text-success">{props.val}</div>; break;
    }
}

function ComparationTable(props) {
    const plans = props.plans;
    const benefits = props.benefits;

    return <table className='table text-white ff-open-sans'>
        <thead>
            <tr style={{ borderColor: "transparent" }}>
                <th></th>
                {
                    plans.map((val) => 
                        <th className="col pb-4 text-center text-white ff-open-sans fw-bold h5">{val}</th>
                    )
                }
            </tr>
        </thead>
        <tbody>
            {
                benefits.map((val) => 
                    <tr className='border-primary'>
                        <td className='pt-5 pb-2 text-start'>{val.name}</td>
                        {
                            val.rate.map((rate) => 
                                <td className='text-center pt-5 pb-2'><ComparationIconValue val={rate} /></td>
                            )
                        }
                    </tr>
                )
            }
        </tbody>
    </table>
}

export default ComparationTable;