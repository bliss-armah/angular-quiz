export class User {
  constructor(
    public email:string,
    private token: string
  ) {}

  get tokens(){
      return this.token
  }

}
