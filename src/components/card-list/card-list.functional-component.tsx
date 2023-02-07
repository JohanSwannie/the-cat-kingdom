import Card from '../card/card.functional-component';
import { Cats } from '../../AppFunction';
import './card-list.styles.css';

type CardListProps = {
  cats: Cats[];
};

const CardList = ({ cats }: CardListProps) => (
        <div className="card-list">
            {cats.map(cat => {
                return ( 
                    <Card cat={cat} />
                )
            })}
        </div>
);

export default CardList;