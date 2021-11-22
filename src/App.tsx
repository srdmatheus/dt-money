import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";



import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [ isNewTransanctionModalOpen, setIsNewTransanctionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransanctionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransanctionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransanctionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />
      <GlobalStyle/>
    </>
  );
}

