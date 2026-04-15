type PropertyCardProps = {
  id: string;
  title: string;
  details: string;
  pricePerNight: number;
};

export default function PropertyCard({
  id,
  title,
  details,
  pricePerNight,
}: PropertyCardProps) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{details}</p>
      <p className="mt-4 font-medium">€{pricePerNight} / night</p>

      <a
        href={`/stays/${id}`}
        className="mt-4 inline-block text-sm font-medium text-blue-600"
      >
        Open
      </a>
    </div>
  );
}