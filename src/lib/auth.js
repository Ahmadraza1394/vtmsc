// Client-side authentication utilities

export const isAdminAuthenticated = () => {
  if (typeof window === "undefined") return false;
  
  const token = localStorage.getItem("adminToken");
  if (!token) return false;

  try {
    // Basic token validation (check if it's not expired)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    
    return payload.exp > currentTime;
  } catch (error) {
    console.error("Token validation error:", error);
    return false;
  }
};

export const getAdminToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("adminToken");
};

export const getAdminEmail = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("adminEmail");
};

export const logoutAdmin = () => {
  if (typeof window === "undefined") return;
  
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminEmail");
  
  // Redirect to login page
  window.location.href = "/admin/login";
};

export const setAuthHeaders = () => {
  const token = getAdminToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
