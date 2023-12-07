import './budget.scss';

export const Budget = ({ amount }) => {
    return (
        <div className="budget-container">
            <div className="budget">
                <span>Presupuesto: {amount.toLocaleString('es-cl', {currency: 'CLP', style: 'currency'})}</span>
            </div>
        </div>    
    )
};