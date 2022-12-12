import items from './resume.json';
import TimelineContainer from './TimelineContainer';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <TimelineContainer>
      {items && items.map((item) => <TimelineItem key={item.id} item={item} />)}
    </TimelineContainer>
  );
};

export default Timeline;
