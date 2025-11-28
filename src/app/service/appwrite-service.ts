import { inject, Injectable } from '@angular/core';
import { Client, Databases, ID } from 'appwrite';
import { environment } from '../../env/env';

@Injectable({
  providedIn: 'root',
})
export class AppwriteService {
  // private client: Client;
  // private databases: Databases;



  constructor() { }
  private client = new Client()
    .setEndpoint(environment.appwriteEndpoint)
    .setProject(environment.appwriteProjectId);


  private db = new Databases(this.client);



  async createEmployee(data: any) {
    return await this.db.createDocument(
      environment.appwriteDatabaseId,
      environment.appwriteCollectionId,
      ID.unique(),
      data
    );
  }

}
