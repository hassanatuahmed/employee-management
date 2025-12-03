import { inject, Injectable } from '@angular/core';
import { Account, Client, Databases, ID, TablesDB } from 'appwrite';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root',
})
export class AppwriteService {


  constructor() {
    this.createAnonymousSession();

  }
  private client = new Client()

    .setEndpoint(environment.appwriteEndpoint)
    .setProject(environment.appwriteProjectId);

  private db = new TablesDB(this.client);
  private account = new Account(this.client);

  async createAnonymousSession() {
    try {
      await this.account.createAnonymousSession();
    } catch (err) {
      console.error("Anonymous session error:", err);
    }
  }
  async createEmployee(data: any) {
    return await this.db.createRow(

      environment.appwriteDatabaseId,
      environment.appwriteCollectionId,
      'unique()',
      { data: data }

    );
  }

}




