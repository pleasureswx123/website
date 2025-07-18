import React from 'react';

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 简洁的渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
    </div>
  );
};

export default DynamicBackground;
