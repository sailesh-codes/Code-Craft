export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-pulse-glow">
          <i className="fas fa-code text-purple-500"></i>
        </div>
        <h1 className="text-2xl font-bold gradient-text mb-2">Code Craft</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
}
