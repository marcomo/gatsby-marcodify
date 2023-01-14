import React, { PropsWithChildren } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useModal } from '../context/ModalContext';

interface IProps {
  image: IGatsbyImageData;
  alt: string;
  allowModal?: boolean;
}

const FeaturedImage: React.FunctionComponent<PropsWithChildren<IProps>> = (
  props
) => {
  const { dispatch } = useModal();

  const imageNode = (
    <GatsbyImage
      image={props.image}
      className="m-auto drop-shadow border-bottom-dark"
      alt={props.alt}
      loading="eager"
    />
  );

  const openModal = () => {
    dispatch({
      type: 'open',
      content: <div className="gatsby-image-layout">{imageNode}</div>,
    });
  };

  return (
    (props.image && (
      <div
        className="gatsby-image-layout"
        onClick={props.allowModal && openModal}
      >
        {imageNode}
      </div>
    )) ||
    null
  );
};

export default FeaturedImage;
