const fetchBudget() {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets`);

    return promise;
})