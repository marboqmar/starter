import './MediaObjectShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { MediaObject } from '../../../components/molecules/MediaObject/MediaObject';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export const MediaObjectShowcase = () => {
  return (
    <div className="media-object-showcase showcase-item">
      <Heading>Media object</Heading>
      <Paragraph>
        The following media objects display their media on different positions, according to the
        value of the property <code>mediaLocation</code>.<br />
        On mobile, the media is always displayed on top of the text unless "down" was stated as the{' '}
        <code>mediaLocation</code>.
      </Paragraph>
      <MediaObject
        component="section"
        mediaLocation="up"
        title="Image up"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <MediaObject
        component="section"
        mediaLocation="right"
        title="Image right"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <MediaObject
        component="section"
        mediaLocation="down"
        title="Image down"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <MediaObject
        component="section"
        mediaLocation="left"
        title="Image left"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <MediaObject
        component="section"
        mediaLocation="left"
        title="Video"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        videoSrc="https://www.youtube.com/watch?v=G1hKzCkywM8"
      />
    </div>
  );
};
