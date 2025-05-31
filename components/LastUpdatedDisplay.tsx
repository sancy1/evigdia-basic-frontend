// components/LastUpdatedDisplay.tsx
import React, { useState, useEffect } from 'react'; // <--- Ensure React is imported!

function LastUpdatedDisplay(): JSX.Element {
  const [lastUpdatedDateTime, setLastUpdatedDateTime] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setLastUpdatedDateTime(`${formattedDate} ${formattedTime}`);
  }, []);

  if (!lastUpdatedDateTime) {
    return <>&nbsp;</>; // <--- This line. Is the fragment causing issues?
  }

  return <>{lastUpdatedDateTime}</>; // <--- This line. Is the fragment causing issues?
}

export default LastUpdatedDisplay;