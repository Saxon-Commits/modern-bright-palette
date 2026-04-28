import { motion } from 'motion/react';

export default function TC() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-coastal-sand">
      <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-gray-100">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl text-coastal-navy mb-8">Terms & <span className="italic">Conditions.</span></h1>
          
          <div className="prose prose-coastal max-w-none space-y-8 text-coastal-navy/80 leading-relaxed font-light">
            <div className="p-6 bg-coastal-blue/10 rounded-2xl italic">
              By booking with The Picnic Project, you agree to the following Terms & Conditions. Please read carefully prior to filling out the booking form.
            </div>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">1. Booking & Payment</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>A deposit is required to secure your booking.</li>
                <li>Your booking is only confirmed and locked in once the deposit has been received.</li>
                <li>Final payment is due 2 days prior to the event date.</li>
                <li>If final payment is not received by this time, The Picnic Project reserves the right to cancel the booking.</li>
                <li>Optional extras must be selected and confirmed prior to the event date.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">2. Cancellations & Refunds</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cancellations made more than 7 days prior to the event will receive a refund of payments made, with 25% of the deposit retained to cover administrative and booking costs.</li>
                <li>Cancellations made within 2 days of the booked date are non-refundable, unless the picnic is rescheduled within a two-month period, subject to availability.</li>
                <li>Rescheduled bookings must take place within two months of the original event date.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">3. Outdoor Events & Wet Weather</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Outdoor events are subject to weather conditions.</li>
                <li>The client is responsible for arranging an alternative indoor location if required or if showers are forecast.</li>
                <li>Upon booking, you will receive a document highlighting suggested wet weather venue options around Newcastle; however, it is the client’s responsibility to enquire, secure, and book these venues.</li>
                <li>The Picnic Project does not provide wet weather venues.</li>
                <li>If rain is forecast and no suitable backup location has been organised, a refund will be provided excluding the deposit, which will be retained.</li>
                <li>Our picnic setups are not weatherproof.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">4. Access & Event Timing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client must ensure clear and safe access to the venue for setup and pack down.</li>
                <li>The standard picnic hire duration is 2.5 hours, unless otherwise agreed in writing.</li>
                <li>The standard hire period includes agreed access for setup and pack down.</li>
                <li>If a longer or shorter duration is requested, this must be arranged in advance.</li>
                <li>If access is delayed or restricted, The Picnic Project is not responsible for reduced picnic time.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">5. Food & Catering</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Picnic Project does not provide food or catering services.</li>
                <li>Clients are welcome to BYO food, beverages and serving platters etc.</li>
                <li>Upon booking, clients will receive a guide including recommended catering providers and wet weather suggestions.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">6. Client Responsibilities & Damage</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client is responsible for the conduct of all guests during the event.</li>
                <li>Ensuring all hired equipment and styling items are treated with care.</li>
                <li>Any damage, breakage, staining, theft, or loss of equipment or styling items will be charged to the client at the full replacement value.</li>
                <li>All styling items remain the property of The Picnic Project unless otherwise stated (e.g., personalised signage).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">7. Liability & Safety</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Picnic Project takes reasonable care to provide a safe and professional setup. However, we are not liable for: injuries or accidents; loss, theft, or damage to personal belongings; weather-related disruptions.</li>
                <li>Children must be supervised at all times.</li>
                <li>Candles may be used; however, they will not be used if wind speeds exceed 15 km/h.</li>
                <li>Umbrellas will not be installed if winds exceed 20 km/h.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-coastal-navy mb-4">8. Force Majeure</h3>
              <p>
                The Picnic Project is not liable for cancellations, delays, or changes resulting from circumstances beyond our reasonable control. 
                In such circumstances, we will make reasonable efforts to reschedule your booking where possible; however, refunds will remain 
                subject to the cancellation policy outlined above.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
