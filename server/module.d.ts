declare namespace NodeJs {
  export interface ProcessEnv {
    DATABASE_URL: string
    JwtSecretKey: string
    JwtRefreshTokenKey: string
  }
}