import {Entity} from "../../../../../../src/decorator/entity/Entity.ts";
import {PrimaryColumn} from "../../../../../../src/decorator/columns/PrimaryColumn.ts";
import {Column} from "../../../../../../src/decorator/columns/Column.ts";

@Entity()
export class Post {

    @PrimaryColumn({ type: Number })
    id!: number;

    @Column({ collation: "French_CI_AS", type: String })
    name!: string;

}
