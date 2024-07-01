import Modal from "react-modal";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { useRouter } from "next/navigation";
import { useAuthContext } from "./context/AuthContext";

Modal.setAppElement('#root')

export function App() {
  const { userAuth, logout } = useAuthContext();
  const router = useRouter();

  console.log(userAuth);

  if (userAuth == null) {
    router.push("/signIn");
  }

  const[isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

    function handleOpenNewTransactionsModal() {
        setIsNewTransactionsModalOpen(true)
    }
    
    function handleCloseNewTransactionsModal() {
        setIsNewTransactionsModalOpen(false)
    }
  
  return (
      <TransactionsProvider >
        <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal}/>
        <DashBoard/>
        <NewTransactionModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal}/>
        <GlobalStyle />
        <button onClick={() => logout()}>Sign Out</button>
      </TransactionsProvider>
  );
}
