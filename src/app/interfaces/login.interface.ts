export interface LoginRequest {
  email: string;
  password: string;
  remember_me: boolean;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_at: Date;
}
