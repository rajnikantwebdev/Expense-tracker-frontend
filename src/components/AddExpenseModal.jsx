import React, { useState } from "react";
import ReactDOM from "react-dom";
import { X, DollarSign, FileText, Plus } from "lucide-react";
import axios from "axios"

const AddExpenseModal = ({ isOpen, onClose, setRefresh }) => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
  });

  const [errors, setErrors] = useState(null)

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.description || !formData.amount) {
      setErrors("Description and Amount are required")
      return
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/expenses`,
        formData
      );
      if(response.status === 201) {
        setRefresh((prev) => !prev)
        onClose()
        alert("Expense added")
        setErrors(null)
      }
    } catch (error) {
      console.log("Expense not added ", error)
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-full">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Add Expense</h2>
              <p className="text-blue-100 text-sm">Track your spending</p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Description Field */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="flex items-center space-x-2 text-sm font-semibold text-gray-700"
            >
              <FileText className="w-4 h-4 text-gray-500" />
              <span>Description</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="e.g., Coffee, Groceries, Gas..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
              required
            />
          </div>

          {/* Amount Field */}
          <div className="space-y-2">
            <label
              htmlFor="amount"
              className="flex items-center space-x-2 text-sm font-semibold text-gray-700"
            >
              <DollarSign className="w-4 h-4 text-gray-500" />
              <span>Amount</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-lg">$</span>
              </div>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                required
              />
            </div>
          </div>

          <div>
            {errors && <span className="text-red-500 text-sm">{errors}</span>}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default AddExpenseModal;