declare namespace NodeJs{
  export interface ProcessEnv{
    jwtSecretKey: string;
    jwtRefreshTokenKey: string;
  }
}