export interface ResponseSuccessInterfaces {
    data: TokenResponse;
    message: string;
    success: boolean;
    time: Number;
}

export interface TokenResponse {
    data: {
        access_token,
        expires_at,
        token_type
    }
}
