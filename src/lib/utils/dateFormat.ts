const dateFormat = (datetime: string | Date) => {
  const dateTime = new Date(datetime);
  // const date = dateTime.toLocaleDateString([], {
    // day: "numeric",
	// month: "long",
	// year: "numeric",
  // });

  // const time = dateTime.toLocaleTimeString([], {
    // hour: "2-digit",
    // minute: "2-digit",
  // });
  const date = dateTime.toLocaleDateString('en-GB');
  
  return date;
};

export default dateFormat;
