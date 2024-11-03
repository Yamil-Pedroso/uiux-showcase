
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface VideoProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  style?:  React.CSSProperties;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>(({
  src,
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  className,
  style
}, ref) => {
  return (
    <video
      ref={ref}
      src={src}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      controls={controls}
      className={className}
      style={style}
    />
  );
});

const MotionVideo = motion(Video)

export default MotionVideo
