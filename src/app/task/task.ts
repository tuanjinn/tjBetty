
export class Task {
  id: number;
  name: string;
  //description: string;
  duration: number; // in min

  constructor(name: string){
    this.name = name;
    this.duration = 2;
    this.id = 666;
  }

}
