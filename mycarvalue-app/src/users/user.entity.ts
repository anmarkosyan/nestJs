import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  insertLogger() {
    console.log(`Inserted record with id: ${this.id}`);
  }
  @AfterRemove()
  removeLogger() {
    console.log(`Removed record with id: ${this.id}`);
  }
  @AfterUpdate()
  updateLogger() {
    console.log(`Updated record with id: ${this.id}`);
  }
}
