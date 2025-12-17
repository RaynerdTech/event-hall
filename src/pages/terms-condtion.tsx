import React from "react";


export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white py-8 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="md:text-[28px] text-[24px] font-bold tracking-[2px] md:leading-[36px] mb-4 leading-[32px]"> 
          TERMS AND CONDITIONS
        </h1>

        <div className="space-y-6">
          {/* Definitions & Booking Section */}
          <section>
            <h2 className="text-xl font-bold tracking-wide mb-1">
              DEFINITIONS & BOOKING
            </h2>
            
            <h3 className="text-base font-bold">1. DEFINITIONS</h3>
            <div className="space-y-1 text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• "THE EVENT" means the event to be held by the Hirer at GLORY in accordance with the booking.</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• "EXCLUSIVE USE" means full use of the facilities at GLORY.</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• "THE HIRER" is the individual or organisation who books and pays for GLORY, agrees to these Terms and Conditions, and takes full responsibility for the venue during the hire period.</p>
            </div>

            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">1.1 BOOKING AND PAYMENT</h3>
            <div className="space-y-1 text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">A deposit is required to book an Event. The remaining balance must be paid according to the following schedule:</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">TIME TO EVENT DATE — AMOUNT DUE</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 9 months prior: Deposit (£500)</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 6 months prior: 50% of booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 3 months prior: 75% of booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 3 months or less: 100% of booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">TOTAL DEPOSIT: £500.00 (Five hundred pounds)</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">EVENTS BOOKED WITHIN 3 MONTHS OF THE EVENT DATE:</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• £500.00 deposit</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 50% of booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• Remaining balance due 1 month prior to the event date</p>
            </div>

            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">1.2PROVISIONAL BOOKINGS</h3>
            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px] mb-6">
              Bookings remain provisional until the deposit is paid in full and the signed Terms & Conditions are returned within 7 days. GLORY may cancel any event without notice if this requirement is not met.
            </p>

            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">1.3 PAYMENT METHOD</h3>
            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px] mb-6">
              GLORY does not accept personal cheques. All payments must be made via BACS.
            </p>

            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">1.4 PRICE CHANGES</h3>
            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px] mb-6">
              All prices are in pounds sterling and may change without prior notice, up to a maximum of 10% of the total cost of The Event. Any changes due to government laws, regulations, or duty adjustments will be charged to the Hirer.
            </p>

            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">1.5 LATE PAYMENTS</h3>
            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">
              GLORY may charge 2% interest per month (or part month) on overdue payments. Any such interest will be considered payable under these Terms and Conditions.
            </p>
          </section>

          {/* Cancellation Section */}
          <section>
            <h2 className="text-2xl font-bold tracking-wide mb-1">
              2 CANCELLATION & NON-ARRIVAL POLICY
            </h2>
            
            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">2.1 CANCELLATION CHARGES</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All initial payments made to secure the event date are non-refundable.</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">For bookings cancelled more than 3 months before the event, a £250.00 Admin Fee is retained.</p>
            </div>

            <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">2.1 CANCELLATION SCHEDULE:</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">BEFORE EVENT DATE — CHARGE</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 9-6 months prior: 50% of the booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 6-3 months prior: 75% of the booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• 3-0 months prior: 100% of the booking fee</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Please ensure you are fully aware of these cancellation terms.</p>
                      </div>
                      
                       <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">2.2 CANCELLATION PROCEDURE</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All cancellations must be emailed to GLORY.</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> A cancellation becomes effective only when GLORY acknowledges the email, and charges will apply accordingly.</p>
                      </div>
                      
                              <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">2.3 GLORY'S RIGHT TO CANCEL</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY may cancel a booking if:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (a) Payments owed to GLORY are more than 30 days overdue</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (b) The Hirer materially breaches booking or payment conditions and fails to correct the breach within 10 days</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  (c) The booking is, in GLORY management's opinion:</p>
                            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• harmful to GLORY's reputation</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• illegal</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• not in the public interest</p>
                      </div>
                      
                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">2.4 CANCELLATION BY GLORY</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">If GLORY cancels the event, GLORY may refund any charges paid excluding the deposit.</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  No further liability of any kind will be owed to the Hirer.</p>
                      </div>

                             <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">3 HIRE PERIOD</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY will be booked for the time stated on the Booking Form. All bookings must be completed, and the venue fully vacated, by 12am (midnight) on the day of hire unless prior written agreement is provided by GLORY.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> If the booking continues beyond midnight, the following additional charges apply:</p>
                           <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• Up to 1 additional hour: £250.00</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• Up to 2 additional hours: £250.00 for the first hour and £200.00 for the second hour (total £450.00)</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Overtime charges are payable immediately at the end of the event or will be deducted from the security deposit.</p>
                            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer is responsible for ensuring that all guests and vendors leave GLORY promptly at the agreed time.</p>
                      </div>

                          <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">4 HIRE SECURITY DEPOSIT</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY requires a refundable security deposit of £500.00, payable with the final balance.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> This deposit covers damages, breakages, or negligence caused by the Hirer or their guests.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The security deposit will be refunded within 14 days of the event, minus any charges for damages.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> All damages and associated costs will be confirmed within 72 hours and deducted from the deposit.</p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">5 SUPPLIER AGREEMENT</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Before appointing vendors (e.g., Caterer, Decorator, DJ), the Hirer must provide their names and contact details 1 month prior to the event.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Hirer is responsible for all vendors appointed for the event.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> Failure to comply with Vendor Agreement conditions may result in charges for negligence, damage, and termination of any future engagement at GLORY.</p>
                        
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">6 VENUE PROVISION</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">As part of the dry hire, GLORY will provide:</p>
                         <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • A venue representative for the duration of the day</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Allocated car-parking attendants</p>
                        <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The GLORY representative works solely on behalf of GLORY and does not manage, coordinate, or run the event.</p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">7.3 EXCESSIVE BREAKDOWN CHARGES</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">If GLORY considers the vendor breakdown to overrun excessively, a charge of £250.00 per hour will apply to cover staffing, running costs, and anti-social hours.</p>
                        
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">7.5 NEXT-DAY COLLECTION</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Next-day access or collection is permitted only at GLORY's sole discretion.</p>
                        
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">7.6 KITCHEN CLEARING</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer must ensure that all Caterers, contractors, and associated personnel clear, clean, and vacate the kitchen area no later than 30 minutes before the Event End Time stated on the Booking Form.
</p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">7.7 KITCHEN AREA DEFINITION</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">“Kitchen Area” refers to any kitchen, food preparation, or service areas provided by GLORY.
</p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">7.8 NON-COMPLIANCE</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Failure to comply may result in GLORY deducting part or all of the security deposit, without prejudice to additional rights or remedies available to GLORY.

</p>
                      </div>

                      <h3 className="text-[24px] font-bold ">8 LIABILITY</h3>
                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">8.1 DAMAGE & INJURY</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer is liable for any loss or damage caused to GLORY's property, including walls, light fittings, furnishings, equipment (including hired items), or any injury to any person (including GLORY staff) caused by the Hirer or their guests.

</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer must pay GLORY, on demand, the cost required to repair or remedy any damage.</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Hirer shall indemnify GLORY against all resulting loss or liability.</p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">8.1 PROHIBITED ADHESIVES</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Items such as Blu-Tack or similar adhesive materials are strictly prohibited.

</p>
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> Non-compliance may result in forfeiture of the security deposit.</p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">8.2 DAMAGE EXCEEDING DEPOSIT</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">If repair or replacement costs exceed the deposit held, the Hirer agrees to pay the additional amount within 14 days of receiving written notice and an itemised invoice from GLORY.
                          </p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">8.4 RETURN OF DEPOSIT BALANCE</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Any remaining balance of the security deposit will be returned to the Hirer within 14 days of inspection and assessment, provided all obligations have been met.
                          </p>
                      </div>

                        <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">8.5 LIMITATION OF LIABILITY</h3>
            <div className="text-sm leading-relaxed mb-6">
              <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY will not be liable for:
                          </p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Personal injury (including death) to any person employed by the Hirer or their guests</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Loss or damage to any property belonging to the Hirer or their guests</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Any claims or costs arising from activities carried out by the Hirer</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Exceptions apply only where injury or loss results from the negligence of GLORY or its representatives.</p>
                      </div>
                       
                      <h3 className="text-[24px] font-bold">9 PROHIBITED SUBSTANCES</h3>
                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">9.1 ILLEGAL SUBSTANCES</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The possession, use, or distribution of illegal substances is strictly prohibited within GLORY and on the estate grounds where GLORY is located.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer is responsible for ensuring that all guests, contractors, and associated persons comply with this rule.</p>
                          
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">9.2 CONSEQUENCES OF VIOLATION</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">If illegal substances are found on the premises or estate grounds during the hire period, GLORY reserves the right to:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">(a) Withhold the Security Deposit in full</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (b) Immediately terminate the event and require all attendees to vacate the premises</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">These actions do not limit any additional rights or remedies available to GLORY under this Agreement or at law</p>
                          
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">10 THIRD-PARTY SERVICES</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Third-party services are the responsibility of the organiser (the Hirer).</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> Additional conditions may apply for certain services, such as inflatables or specialist equipment.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY is not liable for any third-party services, including but not limited to:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Chair covers</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Table linen</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Dry-hire items</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • External suppliers or contractors</p>
                          
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
11— AGENTS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">If an agent makes a booking on behalf of the Hirer, both the agent and the Hirer are jointly accountable for all obligations under these Terms and Conditions.</p>
                          
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
12 — INSURANCE</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">12.1 EVENT INSURANCE</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY strongly advises the Hirer to obtain adequate event insurance to cover the full cost of the function in case of cancellation due to unforeseen circumstances.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">12.2 THIRD-PARTY INSURANCE</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Any third party hired by the Hirer—including but not limited to cake suppliers, sweet trolleys, decorators, caterers, DJs, and entertainment—must have valid public liability insurance (and employer's liability insurance where applicable).</p>
                          
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">13 FORCE MAJEURE</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY may cancel any booking immediately and without liability if the facilities are damaged or destroyed due to events beyond </p>
                          
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY's control, including but not limited to:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• Fire</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Flood</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Acts of God</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  • Terrorism</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  • War</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Labour or food shortages</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Strikes or industrial unrest</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Transport, fuel, or power restrictions</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  • Vandalism</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  • Any other cause preventing GLORY from fulfilling its obligations</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  In such cases, GLORY will make reasonable efforts to relocate the booking to a suitable alternative venue.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  GLORY is not liable for any direct, indirect, or consequential loss resulting from such cancellation.</p>
                          
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">14 CHILDREN</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All children under the age of 18 must remain under adult supervision at all times while on the premises.</p>
                          
                         
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">15 FOOD AND DRINK</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Due to the nature of the booking, the Hirer's appointed vendors may bring in all food and drink, provided all food hygiene, safety, and legal accreditations are in order.</p>
                          
                         
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">16 SUPPLIER LIABILITY</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All vendors must provide, where applicable:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">• Public Liability Insurance</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Employer's Liability Insurance</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • First Aid at Work certification</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Food Hygiene Certification</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • HACCP documentation</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Any additional mandatory legal documentation required by GLORY</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">17 EVENT MANAGEMENT AND SET UP</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">17.1 DRY HIRE RESPONSIBILITIES</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">For dry-hire events, the Hirer's chosen caterer or event planner is fully responsible for running, coordinating, and managing the event.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> 17.2 SETUP & CLEAR-UP</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All servicing, setup, table arrangements, and clear-up duties are the responsibility of the Caterer or Event Management Team.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  They must supply their own crockery, cutlery, linen, and glassware.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">For insurance reasons, only the Caterer/Event Planner and their agents may set up or move tables, chairs, or equipment.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> Family, friends, or guests of the Hirer are not permitted to perform any setup tasks.</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1"> 18  VENUE CLEAN</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">After the event ends and guests have vacated the premises, GLORY staff will arrange cleaning services.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer must remove all large items such as:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  • Bottles</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Cans</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Props</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Décor</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  • Crockery</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Glasses</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Cutlery</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Excessive cleaning requirements, at GLORY's discretion, will result in loss of the security deposit.</p>
                        
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">19 WASTE REMOVAL</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Vendors will be shown where to dispose of waste.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Hirer is responsible for ensuring all event waste is properly removed and that no waste is left outside bins or in the car park</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
20 BANDS AND DJS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">20.1 MUSIC & EQUIPMENT</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Hirer may appoint their own DJ or band. GLORY does not provide a sound system, so all DJs and bands must bring their own speakers.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Music permitted times:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Monday-Saturday: 10am-11:50pm</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> • Sunday: 2pm-11:50pm</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (Unless additional hours have been pre-booked.)</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">20.2 SAFETY & LIABILITY</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All DJs and bands must comply with Health and Safety regulations and provide insurance and PAT testing certificates upon request.</p>
                            <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer is liable for any damage caused by DJs or bands, including damage that disrupts venue services (e.g., electrical issues).</p>
                      </div>

                                   <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
21 FIRE SAFETY</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">All fire doors must remain unobstructed at all times.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  Fire exit signage and fire extinguishers must not be moved or tampered with.</p>
                      </div>

                                   <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
22 BAR ARRANGEMENTS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer has full use of the venue bar.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">  GLORY does not charge corkage for drinks brought in.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The bar must be operated solely by the Hirer's appointed caterer or bar staff.</p>
                      </div>

                                   <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
23 POWER FACILITATION</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The venue and kitchen have dedicated power supplies.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Caterer and DJ/Band must consult with GLORY's sound and power engineer prior to the event to confirm load capacity and ensure any additional equipment is suitable.</p>
                      </div>

                                   <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24 GENERAL POINTS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">24.1 PROPERTY & VEHICLES</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY is not responsible for any property or items belonging to the Hirer or guests, including theft or damage to vehicles in the car park.</p>
                      </div>

                                   <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.2 INFORMATION ACCURACY</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">While GLORY strives for accurate information in brochures or advertisements, it may alter or withdraw services or amenities without notice if necessary.</p>
                      </div>
                      
                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.3 VARIATIONS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">No variation to these Terms and Conditions is valid unless in writing and signed by both GLORY and the Hirer.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> Verbal agreements do not supersede these terms.</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.4 EJECTION OF PERSONS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY may remove any person deemed objectionable.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Hirer is liable for any resulting consequences.
</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.5 ALTERNATIVE SERVICES</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY reserves the right to provide alternative services of at least equivalent standard at no extra cost.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">24.6 DELIVERY OF GOODS
                          </p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer must not deliver or arrange delivery of goods to GLORY without prior written consent. All such items are stored at the Hirer's risk.</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.7 EXTERNAL ENTERTAINMENT</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">GLORY must approve any external entertainment or activities.</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> The Hirer must ensure all third parties provide risk assessments and insurance documentation when requested.
                          </p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.8 HIRER ACCOUNTABILITY</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer is responsible for the payment of all charges, including unpaid charges incurred by their guests.</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.9 OTHER LOCAL EVENTS</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">Multiple events may take place in nearby venues. GLORY will try to minimise disruption but accepts no liability for interference.</p>
                      </div>

                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.10 HIRER CONDUCT</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The Hirer and guests must:</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (a) Comply with all licensing, health and safety, and venue regulations</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">(b) Not carry out electrical or other works without written consent</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (c) Not store or bring flammable or objectionable substances</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (d) Not behave in an improper, disorderly, or disruptive manner</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]"> (e) Leave the premises promptly at the appropriate time</p>
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">The bar closes at midnight and all music must be turned off by midnight.</p>
                      </div>
                      <h3 className="text-[22px] font-bold md:leading-[28px] leading-[20px] mb-1">
24.11 GOVERNING LAW</h3>
                       <div className="text-sm leading-relaxed mb-6">
                          <p className="md:text-[16px] text-[14px] tracking-[0.5px] .font-plex md:tracking-[1.8px] font-normal md:leading-[24px] leading-[20px]">This contract is non-assignable by the Hirer and governed by English law</p>
                      </div>


          </section>
        </div>
      </div>
    </div>
  );
}