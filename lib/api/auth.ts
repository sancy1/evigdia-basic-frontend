
// lib/api/auth.ts

const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Tokens {
  access: string;
  refresh: string;
}

interface DebugInfo {
  user_id?: string;
  email?: string;
  tokens?: Tokens;
}

interface RegisterUserPayload {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  role?: string;
  is_staff?: boolean;
  is_superuser?: boolean;
}

interface ApiResponse {
  status: string;
  message: string;
  debug?: DebugInfo;
  user?: any;
  tokens?: Tokens; // Keeping this as a direct property for backward compatibility
}


export const registerUser = async (payload: RegisterUserPayload): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_API_URL}/api/user/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      // Handle API errors
      throw new Error(data.message || 'Registration failed')
    }

    // Ensure the response has the expected structure
    if (!data.status && !data.user) {
      throw new Error('Unexpected response format from server')
    }

    return data

  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}


export const resendVerificationEmail = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_API_URL}/api/user/resend-verification-email/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to resend verification email');
    }

    return await response.json();
  } catch (error) {
    console.error('Resend verification error:', error);
    throw error;
  }
};



export const verifyEmail = async (token: string): Promise<ApiResponse> => {
  try {
    // Try POST first with JSON body (as your current frontend sends)
    let response = await fetch(
      `${BASE_API_URL}/api/user/verify-email/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }
    );

    // If POST fails and specifically indicates Method Not Allowed, try GET with query parameter
    if (!response.ok && response.status === 405) { // 405 Method Not Allowed
      console.warn("POST failed with 405. Retrying with GET method and query parameter.");
      response = await fetch(
        `${BASE_API_URL}/api/user/verify-email/?token=${encodeURIComponent(token)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Verification failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
};

