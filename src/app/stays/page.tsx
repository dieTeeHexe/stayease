import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import { prisma } from "../lib/prisma";

export default async function StaysPage() {
  const properties = await prisma.property.findMany();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-bold">Available stays</h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse short-term rooms and apartments.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={String(property.id)}
                title={property.title}
                details={property.details}
                pricePerNight={property.pricePerNight}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}