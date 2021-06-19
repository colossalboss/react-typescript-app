import React, { FC } from 'react'
import { IState as IProps} from "../App"

const List: FC<IProps> = ({ people }: IProps) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
                <li className="List" key={ index }>
                    <div className="List-header">
                        <img src={ person.url } alt="" className="List-img" />
                        <h2>{ person.name }</h2>
                    </div>
                    <p>{ person.age } years old</p>
                    <p className="List-note">{ person.note }</p>
                </li>
            )
        })
    }

    return (
        <div>
            <ul>
                { renderList() }
            </ul>
        </div>
    )
}

export default List;
