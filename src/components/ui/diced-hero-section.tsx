"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChronicleButton } from './chronicle-button';

interface TextStyle {
  color?: string;
  fontSize?: string;
  gradient?: string;
}
interface ButtonStyle {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverForeground?: string;
}
interface SlideContent {
  title: string;
  image: string;
}
interface DicedHeroSectionProps {
  topText: string;
  mainText: string;
  subMainText: string;
  buttonText: string;
  slides: SlideContent[];
  onMainButtonClick?: () => void;
  onGridImageHover?: (index: number) => void;
  onGridImageClick?: (index: number) => void;
  topTextStyle?: TextStyle;
  mainTextStyle?: TextStyle;
  subMainTextStyle?: TextStyle;
  buttonStyle?: ButtonStyle;
  componentBorderRadius?: string;
  backgroundColor?: string;
  separatorColor?: string;
  maxContentWidth?: string;
  mobileBreakpoint?: number;
  fontFamily?: string;
  isRTL?: boolean;
}

export const DicedHeroSection: React.FC<DicedHeroSectionProps> = ({
  topText,
  mainText,
  subMainText,
  buttonText,
  slides,
  onMainButtonClick,
  onGridImageHover,
  onGridImageClick,
  topTextStyle,
  mainTextStyle,
  subMainTextStyle,
  buttonStyle = {},
  componentBorderRadius = '0px',
  backgroundColor,
  separatorColor = '#9C2A2A', // maroon default
  maxContentWidth = '1536px',
  mobileBreakpoint = 1000,
  fontFamily = 'inherit',
  isRTL = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isRTLCheck = (text: string): boolean => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
  };

  useEffect(() => {
    const checkMobile = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < mobileBreakpoint);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const getGradientStyle = (gradient?: string) => {
    if (gradient) {
      return {
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    }
    return {};
  };

  return (
    <main
      ref={containerRef}
      className="py-12 px-6 overflow-hidden flex flex-col items-center justify-center w-full mx-auto"
      style={{
        borderRadius: componentBorderRadius,
        backgroundColor,
        flexDirection: isMobile ? 'column' : isRTL ? 'row-reverse' : 'row',
        maxWidth: maxContentWidth,
        fontFamily,
      }}
    >
      <div
        style={{
          flex: 1,
          marginRight: isMobile ? 0 : isRTL ? 0 : '2rem',
          marginLeft: isMobile ? 0 : isRTL ? '2rem' : 0,
          textAlign: isMobile ? 'center' : isRTL ? 'right' : 'left',
          alignItems: isMobile ? 'center' : isRTL ? 'flex-end' : 'flex-start',
          maxWidth: isMobile ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
          paddingBottom: isMobile ? '2rem' : 0,
        }}
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              ...topTextStyle,
              ...getGradientStyle(topTextStyle?.gradient),
              direction: isRTLCheck(topText) ? 'rtl' : 'ltr',
              textAlign: isRTLCheck(topText) ? 'right' : 'left',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            {topText}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              ...mainTextStyle,
              direction: isRTLCheck(mainText) ? 'rtl' : 'ltr',
              textAlign: isMobile
                ? 'center'
                : isRTLCheck(mainText)
                ? 'right'
                : 'left',
              fontSize: mainTextStyle?.fontSize || '3.5rem',
              fontWeight: 'bold',
              lineHeight: 1.2,
            }}
          >
            <motion.span
              style={{
                ...getGradientStyle(mainTextStyle?.gradient),
                display: 'inline-block',
              }}
            >
              {mainText}
            </motion.span>
          </motion.h1>
          <motion.hr
            initial={{ width: 0 }}
            animate={{ width: '6.25rem' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              height: '0.25rem',
              background: separatorColor,
              border: 'none',
              margin: isMobile
                ? '1.125rem auto 1.875rem'
                : isRTLCheck(mainText)
                ? '1.125rem 0 1.875rem auto'
                : '1.125rem 0 1.875rem',
            }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              ...subMainTextStyle,
              ...getGradientStyle(subMainTextStyle?.gradient),
              direction: isRTLCheck(subMainText) ? 'rtl' : 'ltr',
              textAlign: isRTLCheck(subMainText) ? 'right' : 'left',
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'rgba(0,0,0,0.7)',
            }}
          >
            {subMainText}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: isMobile
              ? 'center'
              : isRTL
              ? 'flex-end'
              : 'flex-start',
          }}
        >
          <ChronicleButton
            text={buttonText}
            onClick={onMainButtonClick}
            hoverColor={buttonStyle?.hoverColor || "#E8B923"}
            hoverForeground={buttonStyle?.hoverForeground ?? '#fff'}
            borderRadius={buttonStyle?.borderRadius}
            customBackground={buttonStyle?.backgroundColor || "#9C2A2A"}
            customForeground={buttonStyle?.color || "#ffffff"}
            width="200px"
          />
        </motion.div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isRTL ? 'flex-start' : 'flex-end',
          position: 'relative',
          width: isMobile ? '100%' : '50%',
          paddingLeft: isMobile ? 0 : isRTL ? 0 : '2rem',
          paddingRight: isMobile ? 0 : isRTL ? '2rem' : 0,
          height: 'auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            width: '100%',
            aspectRatio: '1 / 1',
          }}
        >
          {slides.slice(0, 4).map((slide, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                overflow: 'hidden',
                borderRadius: '20px',
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`warped-image ${
                  ['bottom-right', 'bottom-left', 'top-right', 'top-left'][
                    index
                  ]
                }`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                onClick={() => onGridImageClick && onGridImageClick(index)}
                onMouseEnter={() => onGridImageHover && onGridImageHover(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .warped-image {
          --r: 20px;
          --s: 40px;
          --x: 25px;
          --y: 5px;
        }
        .top-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 0 var(--_m), 100% calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .top-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(at var(--r) var(--r),#000 75%,#0000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 0 var(--_m), 0 calc(var(--_d) + var(--y)) var(--_m), radial-gradient(var(--s) at 0 0,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(var(--r) + var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(var(--_d) + var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-left {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 180deg at var(--r) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(var(--_d) + var(--x)) 100% var(--_m), 0 calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 0 100%,#0000 99%,#000 calc(100% + 1px)) calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(var(--_d) + var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
        .bottom-right {
          --_m:/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%);
          --_g:conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)),#0000 25%,#000 0);
          --_d:(var(--s) + var(--r));
          mask: calc(100% - var(--_d) - var(--x)) 100% var(--_m), 100% calc(100% - var(--_d) - var(--y)) var(--_m), radial-gradient(var(--s) at 100% 100%,#0000 99%,#000 calc(100% + 1px)) calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)), var(--_g) calc(-1*var(--_d) - var(--x)) 0, var(--_g) 0 calc(-1*var(--_d) - var(--y));
          mask-repeat: no-repeat;
        }
      `}</style>
    </main>
  );
};
