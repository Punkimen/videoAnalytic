export const handleError = (err: unknown) => {
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.error("An unknown error occurred");
  }
};
