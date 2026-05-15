import Container from "@/components/ui/Container";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            Cleanex Argentina
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Servicios de limpieza profesional
          </p>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Cleanex Argentina
        </p>
      </Container>
    </footer>
  );
}