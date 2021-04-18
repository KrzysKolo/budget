export const fetchBudget = async ({ id }) => {
    const response = await fetch(`http://localhost:4001/budgets/${id}/?_embed=transactions`);

    const data = await response.json();

    return data;
  };

  export const fetchBudgetedCategories = async ({ id }) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);
    const data = await response.json();

    return data;
  };
