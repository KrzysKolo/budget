export const fetchBudget = async ({ id }) => {
    const response = await fetch('http://localhost:4001/budgets');

    const data = await response.json();
    console.log(data)
    return data;
  };

  export const fetchBudgetedCategories = async ({ id }) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);
    const data = await response.json();

    return data;
  };
