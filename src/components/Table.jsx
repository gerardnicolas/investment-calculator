import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Table({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <div className="rounded-2xl mb-16">
      <table className="w-3xl text-center mx-8 table-fixed">
        <thead>
          <tr>
            <th className='p-4'>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {resultsData.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;

            const totalAmountInvested = result.valueEndOfYear - totalInterest;

            return (
              <tr key={result.year}>
                <td className='p-2'>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
