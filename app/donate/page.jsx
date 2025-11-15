export default function Donate(){
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-bold text-saffron-700 mb-6">Donate</h1>
      <div className="rounded-xl shadow-lg p-8 bg-gradient-to-b from-saffron-50 to-white">
        <h2 className="text-2xl font-semibold text-saffron-700 mb-4">Support our temple seva</h2>
        <p className="mb-6 text-gray-700">You can integrate Razorpay / Stripe here. The button below is a placeholder.</p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-md bg-saffron-600 text-white">Donate Now</button>
          <a className="px-6 py-3 rounded-md border border-saffron-300 text-saffron-700" href="#">Bank Transfer Details</a>
        </div>
      </div>
    </section>
  )
}
