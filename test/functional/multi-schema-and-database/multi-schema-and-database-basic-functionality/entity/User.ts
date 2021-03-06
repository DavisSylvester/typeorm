import {Entity} from "../../../../../src/decorator/entity/Entity.ts";
import {Column} from "../../../../../src/decorator/columns/Column.ts";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn.ts";

@Entity({ schema: "userSchema" })
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: String })
    name!: string;

}
