import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditon = () => {
    return (
        <div>
            <h3>Here is Our Terms & Conditionns</h3>
            <p>Go Back to <Link to="/register">Registation</Link></p>
        </div>
    );
};

export default TermsAndConditon;