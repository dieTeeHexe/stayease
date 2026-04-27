import Navbar from "../components/Navbar";
import { prisma } from "../lib/prisma";

export default async function Home(){
return (
    <>
    <Navbar/>
    
    <main className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
            <section className="mb-12">
                <h1 className="text-4xl font-bold">StayEase</h1>
                <p className="mt-4 mx-w-2xl text-lg text-gray-600">
                    Enter your property data to add it to the catalogue.
                </p>
                
                <hr className="my-6 border-gray-250" />

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    Title:
                </p>
                <input placeholder="Cozy studio near city center..." className="border-1 border-gray-400 rounded-lg focus:outline-none w-full 
                px-3 py-2"/>

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    City:
                </p>
                <input placeholder="Frankfurt, Hamburg, Berlin..." className="border-1 border-gray-400 rounded-lg focus:outline-none w-full 
                px-3 py-2"/>

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    Details:
                </p>
                <input placeholder="1 bed · Wi-Fi · Kitchen · Balcony" className="border-1 border-gray-400 rounded-lg focus:outline-none w-full 
                px-3 py-2"/>

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    Price per night:
                </p>
                <div className="flex items-center gap-2">
                <input placeholder="70,00" className="border border-gray-400 rounded-lg focus:outline-none w-1/10 px-3 py-2"/>
                <span>€</span>
                </div>

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    Description:
                </p>
                <textarea placeholder="A comfortable and quiet place close to public transport and shops..." className="border-1 border-gray-400 rounded-lg focus:outline-none w-full 
                px-3 py-2 h-50"/>

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    Max. guests:
                </p>
                <input placeholder="2/3/4..." className="border-1 border-gray-400 rounded-lg focus:outline-none w-full 
                px-3 py-2"/>

                <p className="mt-4 mx-w-2xl font-semibold text-lg text-black">
                    Preview picture:
                </p>
                <input placeholder="URL of the preview picture" className="border-1 border-gray-400 rounded-lg focus:outline-none w-full 
                px-3 py-2"/>

                <hr className="my-6 border-gray-250" />

                <label className="flex items-center gap-2 mt-4">
                <input type="checkbox" />
                <span>Accept terms</span>
                </label>

                <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Submit</button>

            </section>
        </div>
    </main>
    </>
)
}