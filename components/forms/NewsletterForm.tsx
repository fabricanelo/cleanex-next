interface NewsletterFormProps {
  variant?: "light" | "dark";
}

export default function NewsletterForm({ variant = "light" }: NewsletterFormProps) {
  const inputStyles =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
      : "border-gray-300 bg-white text-gray-900";

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/gracias"
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          No completar: <input name="bot-field" />
        </label>
      </p>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        className={`w-full rounded-full border px-4 py-2.5 text-sm ${inputStyles}`}
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        className={`w-full rounded-full border px-4 py-2.5 text-sm ${inputStyles}`}
      />

      <button
        type="submit"
        className="shrink-0 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-[var(--primary-dark)] hover:text-white"
      >
        Suscribirse
      </button>
    </form>
  );
}
