// api-helpers.js

// Function to handle API request for resetting password
export const forgotPasswordRequest = async (email) => {
  try {
    const response = await fetch('/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in forgotPasswordRequest:', error);
    throw new Error('Failed to reset password');
  }
};
