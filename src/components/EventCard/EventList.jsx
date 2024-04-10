import items from "../../assets/event.json";
import EventCard from "./EvendCard";
import { ListItem, List } from "./EventCard.styled";
console.log(items);



function EventList() {
    return (
        <>
            <List>
            {items.map(({ id,
                imageUrl,
                category,
                priority,
                date,
                location,
                title,
                text }) => (
                <ListItem key={id}>
                    <EventCard
                        id={id}
                        imageUrl={imageUrl}
                        category={category}
                        priority={priority}
                        date={date}
                        location={location}
                        title={title}
                        text={text}
                    />
                </ListItem>
            
            ))}
                </List>
        </>
    )
}

export default EventList;