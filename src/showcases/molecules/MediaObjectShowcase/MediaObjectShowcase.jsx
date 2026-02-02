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
        <code>mediaLocation</code>.<br />
        Borders are applied only in this showcase, to highlight the component's boundaries.
      </Paragraph>
      <Heading level={3}>Image up</Heading>
      <MediaObject
        component="section"
        mediaLocation="up"
        title="Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <Heading level={3}>Image right</Heading>
      <MediaObject
        component="section"
        mediaLocation="right"
        title="Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <Heading level={3}>Image down</Heading>
      <MediaObject
        component="section"
        mediaLocation="down"
        title="Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <Heading level={3}>Image left</Heading>
      <MediaObject
        component="section"
        mediaLocation="left"
        title="Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        imageSrc="/assets/images/test-image-md.png"
      />
      <Heading level={3}>Video</Heading>
      <MediaObject
        component="section"
        mediaLocation="left"
        title="Video"
        videoTitle="YouTube test video for Media Object"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla libero, eget convallis tellus consectetur ac"
        videoSrc="https://www.youtube.com/watch?v=G1hKzCkywM8"
      />
    </div>
  );
};
