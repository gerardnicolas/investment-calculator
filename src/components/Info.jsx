import React from 'react';

const Info = () => {
  return (
    <div className="pb-16 mx-16 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Investment Calculator</h1>
      <p className="mb-4">
        This calculator helps you estimate the future value of your investments
        based on your initial investment, annual contributions, expected return
        rate, and investment duration.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8">Description:</h2>
      <ol className="list-inside mb-8">
        <li className='mb-2'>
          Initial Investment – The starting amount of money you invest. This is
          the principal amount before any additional contributions or interest
          growth.
        </li>
        <li className='mb-2'>
          Annual Investment – The amount of money added to the investment each
          year. This represents regular contributions made to grow the
          investment over time.
        </li>
        <li className='mb-2'>
          Expected Return – The estimated annual return rate (as a percentage)
          that the investment is expected to earn. This rate influences how much
          the investment grows over time.
        </li>
        <li className='mb-2'>
          Duration – The total number of years the investment is held or
          contributed to. This determines how long the investment has to grow
          with returns and additional investments.
        </li>
      </ol>
      <p className="mb-4 font-bold italic">
        Note: The results are estimates and actual returns may vary based on
        market conditions.
      </p>
    </div>
  );
};

export default Info;
