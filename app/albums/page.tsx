import Link from "next/link";

export default async function Albums() {
    const url =await fetch("https://jsonplaceholder.typicode.com/albums")
    const response = await url.json()
    console.log(response)
    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-gray-100 via-gray-300 to-slate-500 p-8">
             <h1 className="text-3xl font-bold mb-10 text-gray-700"> All Albums</h1>
             <div className="grid grid-cols-1 sm:grid-col-2  lg:grid-cols-3 gap-5 w-full max-w-6xl">
                {response.map((album: { id: number; title: string }) => {
                    return (
                        <div key={album.id} className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-lg font-semibold mb-2 text-gray-700">{album.title}</h2>
                            <Link href={`/dalbums/${album.id}`} className="text-blue-500 hover:underline">View Album</Link>
                        </div>
                    )
                })}
             </div>



        </main>


    )
    
}