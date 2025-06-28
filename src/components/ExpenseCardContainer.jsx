import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import { RefreshContext } from "./ContextApi";

const ExpenseCardContainer = () => {
  const [userExpense, setUserExpense] = useState([]);
  const {refresh} = useContext(RefreshContext)
  
  useEffect(() => {
    const getUserExpenseList = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/expenses`);
        console.log("response: ", response);
        if (response.status === 200) {
          setUserExpense(response?.data?.data);
        }
      } catch (error) {
        console.log("error while fetching expenses, try again later", error);
      }
    };
    getUserExpenseList();
  }, [refresh]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Your Expenses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userExpense.length !== 0 ? (
            userExpense.map((expense) => {
              return (
                <ExpenseCard
                  key={expense.id}
                  expenseId={expense.id}
                  description={expense.description}
                  amount={expense.amount}
                />
              );
            })
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseCardContainer