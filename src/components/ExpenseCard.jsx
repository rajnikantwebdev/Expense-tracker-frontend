import axios from "axios";
import { IndianRupee } from "lucide-react";
import { Trash2 } from "lucide-react";
import { HandCoins } from "lucide-react";
import { useContext } from "react";
import { RefreshContext } from "./ContextApi";

export default function ExpenseCard({ description, amount, expenseId }) {
  const {setRefresh} = useContext(RefreshContext)

  const handleExpenseDelete = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/expenses/${expenseId}`
      );
      if(response.status === 200) {
        setRefresh(prev => !prev)
        alert("Expense Deleted Successfully")
      }
    } catch (error) {
      console.log("Unalbe to delte Expense, try again later")
    }
  }
  return (
    <div className="relative group">
      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/90">
        <div className="flex items-start justify-between mb-4">
          {/* Icon container */}
          <div
            className={`
            p-3 rounded-full shadow-md transition-all duration-300 group-hover:scale-110
     
          `}
          >
            <HandCoins />
          </div>

          <div className="text-right">
            <div
              className={`
              text-2xl flex items-center font-bold transition-colors duration-300
            `}
            >
              <IndianRupee />
              <span>{amount}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            {/* <Tag className="w-4 h-4 text-gray-400" /> */}
            <h3 className="text-gray-800 font-semibold text-lg leading-tight">
              {description}
            </h3>
          </div>

          {/* Additional details */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            {/* <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Today</span>
            </div> */}
          </div>
        </div>

        {/* Decorative gradient line */}
        <div
          className={`
          absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 bg-gradient-to-r from-green-400 to-emerald-500 opacity-60 group-hover:opacity-100
        `}
        ></div>

        <button
          onClick={(e) => handleExpenseDelete(e)}
          className="absolute right-5 bottom-5"
        >
          {/* <BsFillTrash3Fill className="text-red-500" /> */}
          <Trash2 className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
