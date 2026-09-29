import api from "./api";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
  role: string;
}

export async function login(
  data: LoginRequest,
): Promise<LoginResponse> {

  const response = await api.post("/auth/login", data);

  const result = response.data.data;

  if (!result || !result.token) {
    throw new Error("Invalid login response from server.");
  }

  localStorage.setItem(
    "eggora_token",
    result.token,
  );

  localStorage.setItem(
    "eggora_user",
    JSON.stringify(result),
  );

  return result;
}

export function logout() {
  localStorage.removeItem("eggora_token");
  localStorage.removeItem("eggora_user");

  window.location.href = "/login";
}

export function getCurrentUser(): LoginResponse | null {

  const user = localStorage.getItem("eggora_user");

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as LoginResponse;
  } catch {
    localStorage.removeItem("eggora_user");
    return null;
  }
}

export function isAuthenticated(): boolean {
  return Boolean(
    localStorage.getItem("eggora_token")
  );
}