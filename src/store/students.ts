interface User {
  name: string;
  isu_id: string;
}

export default class StudentBoard {
  users: User[];
  tables: {
    0: User | null[];
    1: User | null[];
    2: User | null[];
    3: User | null[];
  };

  constructor() {
    this.users = [];
    this.tables = {
      0: [null, null, null, null, null, null],
      1: [null, null, null, null, null, null],
      2: [null, null, null, null, null, null],
      3: [null, null, null, null, null, null],
    };
  }

  private checkUser(user: User) {
    this.users.forEach((user_) => {
      if (user_ === user) {
        console.log(`Found user ${user_.name} in table`);
        return true;
      }
    });
    return false;
  }

  public addUser(row: number, col: number, user: User) {
    if (!this.checkUser(user)) {
      this.tables[row][col] = user;
      this.users.push(user);
    }
  }

  public removeUser(row: number, col: number) {
    this.tables[row][col] = null;
  }

  public getUsers(col: number | null = null) {
    return col !== null ? this.tables[col] : this.tables;
  }

  public getSlotInformation(col: number, row: number) {
    return this.tables[col][row];
  }
}
