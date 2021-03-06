import React from 'react';

import Aux from '../../../hoc/Auxiliary';

import Button from '../../../components/UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button clicked={props.purchaseCancel} buttonType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} buttonType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
