function PaymentPage() {
  return (
    <div>
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Payment</h1>
        <div className="grid grid-cols-4 gap-x-4 mt-4">
          <button
            type="button"
            className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition"
          >
            Cash On Delivery
          </button>
          <button
            type="button"
            onClick={() =>  payhere.startPayment(payment)}
            className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition"
          >
           Credit Card
          </button>
        </div>
      </section>
    </div>
  );
}

export default PaymentPage;