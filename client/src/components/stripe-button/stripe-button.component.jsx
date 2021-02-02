import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HxKj9H5XxM807Pcc5pa5yojA0f91b6FiOJLxcnGLqZ8JR1D9MIYcXc0AGr7RhTnLGz9bq7ePuHisOYokGOCCrpZ00PXTPj3Ic';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('Payment successful');
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert(
                    'There was an issue with your payment'
                );
            });
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing BVBA'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;