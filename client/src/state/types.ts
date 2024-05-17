export interface ExpensesByCategory {
    salaries: number;
    supplies: number;
    services: number;
}

export interface Month {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
    nonOperatingExpenses: number;
    operationalExpenses: number;
}

export interface Day {
    id: string;
    date: string;
    revenue: number;
    expenses: number;
}


export interface GetKipsResponse {
    id: string;
    _id: string;
    __v: number;
    totalExpenses: number;
    totalProfits: number;
    totalRevenue: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
}