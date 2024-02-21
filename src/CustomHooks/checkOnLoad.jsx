import { useEffect, useRef, useState } from 'react'

export const useOnLoadMedia = (ref) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log('Setting up event listeners...');
    console.log('Ref:', ref);

    const updateStatus = (mediaElements) => {
      setStatus(
        mediaElements.map((media) => media.complete || media.readyState === 4).every((item) => item === true)
      );
    };

    if (!ref.current) return;

    const mediaLoaded = Array.from(ref.current.querySelectorAll('img, video'));
    console.log('Media elements:', mediaLoaded);

    if (mediaLoaded.length === 0) {
      setStatus(true);
      return;
    }

    mediaLoaded.forEach((media) => {
      media.addEventListener('load', () => updateStatus(mediaLoaded), {
        once: true,
      });
      media.addEventListener('error', () => updateStatus(mediaLoaded), {
        once: true,
      });

      if (media.tagName == 'VIDEO' && media.readyState === 4) {
        updateStatus(mediaLoaded);
      }
    });

    return () => {
      console.log('Cleaning up event listeners...');
      console.log('Ref:', ref);
      console.log('Media elements:', mediaLoaded);
      mediaLoaded.forEach((media) => {
        media.removeEventListener('load', () => updateStatus(mediaLoaded));
        media.removeEventListener('error', () => updateStatus(mediaLoaded));
      });    
    };
  }, [ref]);

  return status;
};
