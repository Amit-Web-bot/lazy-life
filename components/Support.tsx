"use client"
import { useState } from "react";

export default function Support(){

  const [amount,setAmount] = useState(99);

  const startPayment = async () => {

    const res = await fetch("/api/payment",{
      method:"POST",
      body:JSON.stringify({amount})
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: data.amount,
      currency: "INR",
      name: "Support Amit",
      description: "Lazy life fund 😴",
      order_id: data.id,

      handler: function(){
        alert("Payment successful! 😎")
      }
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return(
    <section className="support-page">

      <h1>Support My Lazy Life 😴</h1>

      <p>Pick an amount or enter custom</p>

      <div className="amount-box">
        {[99,199,499].map(a=>(
          <button 
            key={a}
            onClick={()=>setAmount(a)}
          >
            ₹{a}
          </button>
        ))}
      </div>

      <input 
        type="number"
        value={amount}
        onChange={(e)=>setAmount(+e.target.value)}
      />

      <button 
        className="pay-btn"
        onClick={startPayment}
      >
        Support ₹{amount}
      </button>

    </section>
  )
}
