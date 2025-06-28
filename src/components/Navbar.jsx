import { Pencil } from "lucide-react";
import { useContext, useState } from "react";
import AddExpenseModal from "./AddExpenseModal";
import { RefreshContext } from "./ContextApi";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {setRefresh} = useContext(RefreshContext)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <nav className="shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Heading */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">expT</h1>
          </div>

          {/* Navigation */}
          <div>
            <button
              onClick={openModal}
              className="flex items-center text-lg gap-2 cursor-pointer"
            >
              <span>Add expense</span>
              <Pencil className="w-5" />
            </button>
          </div>
        </div>
      </div>
      <AddExpenseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        setRefresh={setRefresh}
      />
    </nav>
  );
}
