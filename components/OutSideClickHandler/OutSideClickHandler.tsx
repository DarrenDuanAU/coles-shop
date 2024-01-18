import React, { useRef, useEffect } from 'react';

interface OutsideClickHandlerProps {
  onOutsideClick: () => void;
  children: React.ReactNode;
}

const OutsideClickHandler = ({ onOutsideClick, children } : OutsideClickHandlerProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;


// // 使用示例
// const MyComponent: React.FC = () => {
//   const handleOutsideClick = () => {
//     console.log('Clicked outside the component');
//   };

//   return (
//     <OutsideClickHandler onOutsideClick={handleOutsideClick}>
//       {/* 这里放置你的组件内容 */}
//       <div>
//         <p>MyComponent Content</p>
//       </div>
//     </OutsideClickHandler>
//   );
// };

// export default MyComponent;
