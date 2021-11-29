import React, {useEffect, useState} from 'react';

function GetFormattedPrice() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [price, setPrice] = useState('');

    useEffect(() => {
        fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPrice(result.result.ethusd);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return `$${price} USD`;
    }
}

GetFormattedPrice.defaultProps = {};

GetFormattedPrice.propTypes = {};

export default GetFormattedPrice;