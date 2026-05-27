export function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Calorie Choice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
