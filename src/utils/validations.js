const validateName = (name) => {
  if (typeof name !== "string") return false;

  // Trim spaces from start and end
  name = name.trim();

  // Name must not be empty and should contain only letters and spaces
  const nameRegex = /^[A-Za-z\s]+$/;

  return nameRegex.test(name);
};

const validateEmail = (email) => {
  if (typeof email !== "string") return false;

  email = email.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export { validateName, validateEmail };
