import { useEffect, useRef, useState } from 'react'

export const useOnLoadMedia = (ref) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const updateStatus = (mediaElements) => {
      setStatus(
        mediaElements.map((media) => media.complete || media.readyState === 4).every((item) => item === true)
      );
    };

    if (!ref.current) return;

    const mediaLoaded = Array.from(ref.current.querySelectorAll('img, video'));

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
      mediaLoaded.forEach((media) => {
        media.removeEventListener('load', () => updateStatus(mediaLoaded));
        media.removeEventListener('error', () => updateStatus(mediaLoaded));
      });    
    };
  }, [ref]);

  return status;
};
