import React from 'react'

interface Props {
    params: { 
      id: number; 
      photoId: number;
    };
}

const PhotoDetailPage = (props: Props) => {
  console.log(props);
  const photoId = props.params ? props.params.photoId : null;

  return (
    <div>
      PhotoDetailPage{photoId}
    </div>
  )
}

export default PhotoDetailPage