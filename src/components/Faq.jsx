import React from 'react'

const Faq = () => {
  return (
    <div className="join join-vertical bg-base-100 pb-4">
      <h1 className='text-center font-bold font-poppins text-3xl  mb-16'>FAQS</h1>
    <div className="collapse text-[#9ea2a8] collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold">How does it promote social cohesion?</div>
      <div className="collapse-content text-sm">By fostering collaboration and understanding through engaging activities!</div>
    </div>
    <div className="collapse text-[#9ea2a8] collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title font-semibold">Is it free to use?</div>
      <div className="collapse-content text-sm">Absolutely! Join the fun without spending a dime!</div>
    </div>
    <div className="collapse text-[#9ea2a8] collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title font-semibold">What if I have more questions?</div>
      <div className="collapse-content text-sm">Reach out to our support team anytime!</div>
    </div>
  </div>
  )
}

export default Faq