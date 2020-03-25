import React, { useRef, useState } from 'react';
import { Camera } from 'react-cam';
import Placeholder from './placeholder.jpg';

const WebCamera = () => {
  const [placeholder, setPlaceholder] = useState(Placeholder);
  console.log('burda shekil var', placeholder);

  const capture = imgSrc => {
    setPlaceholder(imgSrc);
  };

  const camRef = useRef(null);

  const deletePlaceholder = () => {
    setPlaceholder('');
  };

  return (
    <React.Fragment>
      <div>
        {placeholder ? (
          <>
            <img src={placeholder} alt='img' style={{ position: 'relative' }} />
            <button
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                background: 'blue',
                color: 'white',
                textAlign: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                textDecoration: 'none',
                fontSize: '20px',
                position: 'absolute',
                width: '50px',
                height: '50px',
                marginTop: '259px',
                marginLeft: '135px'
              }}
              onClick={deletePlaceholder}
            ></button>
          </>
        ) : (
          <>
            <Camera
              width={395}
              capture={capture}
              height={310}
              btnColor='#FFEB3B'
              ref={camRef}
            />

            <button
              onClick={img => {
                camRef.current.capture(img);
                camRef.current.camRef.current.srcObject.getTracks()[0].stop();
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: '11px 14px',
                background: 'blue',
                color: 'white',
                width: 'auto',
                textAlign: 'center',
                borderRadius: '10px',
                margin: '7px 0',
                cursor: 'pointer',
                textDecoration: 'none',
                fontSize: '20px',
                minWidth: '100px'
              }}
            >
              Shekili cek
            </button>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default WebCamera;
