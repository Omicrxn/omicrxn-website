import Carousel from './Carousel';

export default function BackgroundLines() {
  return (
    <div className="grid grid-cols-8 h-full w-full absolute inset-0">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={`w-full ${i < 7 ? 'border-r' : ''} border-gray-300`}></div>
      ))}
    </div>
  );
};