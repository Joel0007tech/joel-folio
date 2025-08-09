import React, { useEffect } from 'react';
import { projectDetails } from './index';

const Works: React.FC = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll<HTMLDivElement>('.timeline-item');

    const isInViewport = (element: HTMLElement): boolean => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    const handleScroll = () => {
      timelineItems.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container max-w-4xl mx-auto py-10 px-5">
      <div className="timeline relative">
        <div className="timeline-line absolute top-0 bottom-0 left-5 w-1 bg-gradient-to-b from-red-500 to-blue-500 scale-y-0 origin-top animate-grow-line"></div>
        {projectDetails.map((items, index) => (
          <div
            key={index}
            className="timeline-item relative pl-16 mb-12 opacity-0 translate-y-5 transition-all duration-500"
          >
            <div className="timeline-dot absolute left-0 top-2 w-5 h-5 bg-white border-4 border-purple-500 rounded-full shadow-md scale-0 transition-transform duration-300 delay-500"></div>
            <div className="timeline-content bg-white p-5 rounded-lg shadow-lg relative">
              <div>
                {/* Fix: Render image if items.image is a string */}
                {typeof items.image === 'string' ? (
                  <img src={items.image} alt={items.text || `timeline-img-${index}`} className="mx-auto mb-4 max-h-100 object-contain" />
                ) : (
                  items.image
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{items.text}</h3>
             <a
                      href={items.link}
                      className="text-white text-sm flex justify-center font-normal hover:text-green-500 hover:bg-gray-700
                 bg-green-500 border-[3px] rounded-full p-3 pr-1 pl-1 relative bottom-1 sm:p-2 sm:pl-3 sm:pr-3 sm:text-[13px] sm:font-normal"
                    >
                      <span className='flex justify-center'>{items.linkText}</span>
                    </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;