import { useState } from 'react';
import './App.css'
import ExpenseCardContainer from './components/ExpenseCardContainer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
    const [refresh, setRefresh] = useState(false);
  return (
    <main>
      <Navbar setRefresh={setRefresh} />
      <HeroSection />
      <ExpenseCardContainer refresh={refresh} />
    </main>
  );
}

export default App
