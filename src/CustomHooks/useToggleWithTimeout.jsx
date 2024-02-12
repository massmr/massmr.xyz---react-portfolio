import { useEffect } from 'react'

export const useToggleWithTimeout = (
  condition,
  onToggle1,
  onToggle2,
  duration = 150 ) => {

  const handleClick = () => {
    if (condition) {
      onToggle1();
      console.log("BAR");
      const timeoutId = setTimeout(() => {
        onToggle2();
      }, duration);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      onToggle2();
      console.log("FOO");
      const timeoutId = setTimeout(() => {
        onToggle1();
      }, duration);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  };

  return handleClick;
}
