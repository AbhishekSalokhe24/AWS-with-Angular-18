import { Injectable } from '@angular/core';
import { AuthUser, getCurrentUser, signOut, fetchAuthSession, AuthTokens } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async getCurrentUser(): Promise<AuthUser> {
    return await getCurrentUser();
  }

  async getCurrentSession(): Promise<any> {  // Use any or define a specific interface for the tokens
    const session = await fetchAuthSession();
    console.log('Fetched Session:', session);  // Log the session to check its structure
    return session;
  }

  async getCurrentUserFullName(): Promise<string | undefined> {
    let cognitoToken = await (await fetchAuthSession()).tokens;
    return cognitoToken?.idToken?.payload['name']?.toString();
  }
  
  signOut() {
    signOut();
  }

}