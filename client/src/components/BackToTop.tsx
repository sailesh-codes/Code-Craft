import { useScroll } from "@/hooks/use-scroll";

export default function BackToTop() {
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-50 ${
        scrollY > 500 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      data-testid="button-back-to-top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
