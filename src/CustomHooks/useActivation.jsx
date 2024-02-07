import { useState } from 'react';

const useActivation = (initialState) => {

  const [isActive, setIsActive] = useState(initialState);

  const handleActivation = () => {
    setIsActive(true);
  }
    
  const handleDeactivation = () => {
    setIsActive(false);
  }

  return [isActive, handleActivation, handleDeactivation];
}

export default useActivation
