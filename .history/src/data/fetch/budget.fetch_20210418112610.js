const fetchBudget(id) {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}`);

    return promise;
})