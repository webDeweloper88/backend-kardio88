import { Model, Column, Table, ForeignKey } from "sequelize-typescript";
import { User } from "../../user/models/user.model"

@Table
export class Watchlist extends Model {
    @ForeignKey(() => User)
    user: User

    @Column
    name: string

    @Column
    assetId: string
}