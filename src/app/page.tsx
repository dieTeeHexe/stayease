import Navbar from "./components/Navbar";
import PropertyCard from "./components/PropertyCard";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const properties = await prisma.property.findMany({
    take: 3,
    orderBy: {
      id: "asc",
    },
  });

  /*
  export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  */

  /*
  npm run dev
  */

  /*
  http://localhost:3000
  */

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <section className="mb-12">
            <h1 className="text-4xl font-bold">StayEase</h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Find comfortable rooms and short-term stays for students, travelers,
              and city guests.
            </p>

            <a
              href="/stays"
              className="mt-6 inline-block rounded-xl bg-black px-5 py-3 text-white"
            >
              Browse stays
            </a>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Popular stays</h2>

            <div className="grid gap-6 md:grid-cols-3">
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
          </section>
        </div>
      </main>
    </>
  );
}