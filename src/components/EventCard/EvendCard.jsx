import {
    ImageEvent,
    WrapCategory,
    CategoryEvent,
    PriorityEvent,
    WrapDate,
    DateEvent,
    LocationEvent,
    TitleEvent,
    TextEvent

} from './EventCard.styled';

function EventCard({ imageUrl, category, priority, date, location, title, text }) {
    return (
        <>
            <ImageEvent srs={imageUrl} alt="Events" />
            <WrapCategory>
            <CategoryEvent>{category}</CategoryEvent>
                <PriorityEvent>{priority}</PriorityEvent>
                </WrapCategory>
            <WrapDate>
                <DateEvent>{date}</DateEvent>
                <LocationEvent>{location}</LocationEvent>
            </WrapDate>
            <TitleEvent>{title}</TitleEvent>
            <TextEvent>{text}</TextEvent>
        </>
    )
}
export default EventCard;