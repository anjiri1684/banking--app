"use client";

import CountUp from "react-countup";
function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        duration={2}
        decimal=","
        decimals={2}
        prefix="Kes"
        end={amount}
      />
    </div>
  );
}

export default AnimatedCounter;
