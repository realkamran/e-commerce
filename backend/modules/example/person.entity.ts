import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Person")
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;
}
