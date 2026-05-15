interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}