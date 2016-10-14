export class Progress {
  percentage: number;

  constructor(private duration: number, private title: string) {
    this.percentage = 0;
  }
}
