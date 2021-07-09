import { Column, Entity, PrimaryGeneratedColumn ,BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique: true })
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword () {
        this.password = bcrypt.hashSync(this.password, 8);
    }
}

export default User;