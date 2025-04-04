export default function UserInputs({ onChangeInput, formData }) {
  return (
    <div className="grid grid-cols-2 bg-[#5e503f] p-10 rounded-2xl gap-16 text-white mb-16">
      <div>
        <label htmlFor="initialInvestment" className="uppercase font-bold">
          Initial Investment
        </label>
        <input
          type="number"
          id="initialInvestment"
          placeholder="Enter amount"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          onChange={(event) =>
            onChangeInput('initialInvestment', event.target.value)
          }
          value={formData.initialInvestment}
        />
      </div>
      <div>
        <label htmlFor="annualInvestment" className="uppercase font-bold">
          Annual Investment
        </label>
        <input
          type="number"
          id="annualInvestment"
          placeholder="Enter amount"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          onChange={(event) =>
            onChangeInput('annualInvestment', event.target.value)
          }
          value={formData.annualInvestment}
        />
      </div>
      <div>
        <label htmlFor="expectedReturn" className="uppercase font-bold">
          Expected Return
        </label>
        <input
          type="number"
          id="expectedReturn"
          placeholder="Enter amount"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          onChange={(event) =>
            onChangeInput('expectedReturn', event.target.value)
          }
          value={formData.expectedReturn}
        />
      </div>
      <div>
        <label htmlFor="duration" className="uppercase font-bold">
          Duration
        </label>
        <input
          type="number"
          id="duration"
          placeholder="Enter amount"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          onChange={(event) => onChangeInput('duration', event.target.value)}
          value={formData.duration}
        />
      </div>
    </div>
  );
}
