// EMICalculator.tsx
"use client";
import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Container from "./Container";
import AccessFormModal from "./AccessFormModal";

const COLORS = ["#84cc16", "#ef4444"];

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(8000000);
  const [interestRate, setInterestRate] = useState(5.05);
  const [tenure, setTenure] = useState(9);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rate = interestRate / (12 * 100);
  const time = tenure * 12;

  const emi =
    (loanAmount * rate * Math.pow(1 + rate, time)) /
    (Math.pow(1 + rate, time) - 1);
  const totalPayment = emi * time;
  const totalInterest = totalPayment - loanAmount;

  const data = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];

  const handleSliderChange = (setter: (val: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!hasSubmittedForm) {
      setIsModalOpen(true);
      return;
    }
    setter(Number(e.target.value));
  };

  return (
    <div className="bg-green-50 py-10">
      <h2 className="text-3xl font-bold text-lime-600 text-center mb-8 underline decoration-lime-500 underline-offset-4">
        Calculate your EMI for Home Loan
      </h2>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Loan Amount Slider */}
            <div>
              <label className="block text-lime-700 font-semibold mb-2">
                LOAN AMOUNT
              </label>
              <input
                type="range"
                min="0"
                max="60000000"
                step="100000"
                value={loanAmount}
                onChange={handleSliderChange(setLoanAmount)}
                className="w-full accent-lime-600"
              />
              <div className="text-lime-900 font-bold mt-1">
                ₹{loanAmount.toLocaleString()}
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <label className="block text-lime-700 font-semibold mb-2">
                INTEREST RATE %
              </label>
              <input
                type="range"
                min="0"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={handleSliderChange(setInterestRate)}
                className="w-full accent-lime-600"
              />
              <div className="text-lime-900 font-bold mt-1">
                {interestRate.toFixed(2)}%
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <label className="block text-lime-700 font-semibold mb-2">
                TERM (IN YRS.)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={handleSliderChange(setTenure)}
                className="w-full accent-lime-600"
              />
              <div className="text-lime-900 font-bold mt-1">{tenure} years</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-lime-200">
            <div className="text-xl font-semibold text-lime-800 mb-4">
              EMI AMOUNT
            </div>
            <div className="text-3xl font-bold text-lime-700 mb-6">
              ₹{emi.toFixed(0)}/month
            </div>

            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  fill="#82ca9d"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="flex justify-between text-sm text-gray-700 mt-4">
              <div>
                <div className="font-semibold text-lime-700">
                  PRINCIPAL AMOUNT
                </div>
                <div>₹{loanAmount.toLocaleString()}</div>
              </div>
              <div>
                <div className="font-semibold text-red-600">
                  INTEREST AMOUNT
                </div>
                <div>₹{totalInterest.toFixed(0).toLocaleString()}</div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="text-center">
              <div className="text-gray-500 text-sm">TOTAL AMOUNT PAYABLE</div>
              <div className="text-2xl font-bold text-black">
                ₹{totalPayment.toFixed(0).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <AccessFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          console.log("EMI Form Submitted:", data);
          setHasSubmittedForm(true);
        }}
      />
    </div>
  );
};

export default EMICalculator;
