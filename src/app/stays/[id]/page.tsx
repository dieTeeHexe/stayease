import Navbar from "../../components/Navbar";
import { prisma } from "../../lib/prisma";

type StayPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StayPage({ params }: StayPageProps) {
  const { id } = await params;

  const property = await prisma.property.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white px-6 py-16 text-black">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold">Stay not found</h1>
            <p className="mt-4 text-gray-600">Requested id: {id}</p>
          </div>
        </main>
      </>
    );
  }

  const nights = 3;
  const totalPrice = property.pricePerNight * nights;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm text-gray-500">
            {property.city} · Stay ID: {property.id}
          </p>

          <h1 className="mt-2 text-4xl font-bold">{property.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            {property.description}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <div className="rounded-2xl border p-6 shadow-sm">
                <h2 className="text-2xl font-semibold">About this stay</h2>
                <p className="mt-3 text-gray-700">{property.details}</p>
              </div>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Book this stay</h2>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-full rounded-xl border px-4 py-3"
                  />
                </div>
              </div>

              <div className="mt-6 border-t pt-6">
                <p className="text-gray-600">
                  €{property.pricePerNight} × {nights} nights
                </p>
                <p className="mt-2 text-xl font-semibold">
                  Total: €{totalPrice}
                </p>
              </div>

              <button className="mt-6 w-full rounded-xl bg-black px-5 py-3 text-white">
                Book now
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}