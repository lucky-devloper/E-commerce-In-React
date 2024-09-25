import { useContext, useState } from 'react';
import { ProductContext } from '../Context/Productprovider';

function Payment() {
    const [loading, setLoading] = useState(false);
    const { UserInfo, subTotal } = useContext(ProductContext);

    // Converting subtotal into Rupees and then to Paise (multiply by 100)
    let RupeesInPaise = subTotal * 83 *100;

    // Assuming UserInfo is an array with user details
    const user = UserInfo[0]; // Accessing the first user object in the array

    const handlePayment = async () => {
        setLoading(true); // Set loading state to true before starting payment

        const options = {
            key: 'rzp_test_ftuusjrBzYej92', // Replace with your Razorpay key_id
            amount: RupeesInPaise, // Amount in paise (50000 paise = INR 500)
            currency: 'INR',
            name: 'DNK Private Limited',
            description: 'Test Transaction',
            image: 'https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png', // Your company logo URL
            handler: function (response) {
                // Payment successful handler
                alert(`Payment ID: ${response.razorpay_payment_id}`);
                alert(`Order ID: ${response.razorpay_order_id}`);
                setLoading(false); // Reset loading after success
            },
            prefill: {
                name: user?.firstname || 'John Doe', // Default name if user data is undefined
                email: user?.email || 'johndoe@example.com', // Default email
                contact: user?.phone || '9999999999', // Default phone
            },
            theme: {
                color: '#3399cc',
            },
        };

        try {
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Payment failed", error);
            setLoading(false); // Reset loading if error occurs
        }
    };

    return (
        <button
            className="w-[100%] h-[50px] text-white font-semibold bg-[#0084d6] mt-2"
            onClick={handlePayment}
            disabled={loading}
        >
            {loading ? 'Payment Sucessful' : 'Make Payment'}
        </button>
    );
}

export default Payment;
