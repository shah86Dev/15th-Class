import Link from "next/link";

const DynamicAlbum = async ({ params }: { params: { id: string } }) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.id}`
  );
  const response = await url.json();
  console.log(response);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br  from-gray-100 via-gray-300 to-gray-500">
        <div className="p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-violet-500">Album Details</h1>
      <div className="space-y-4 text-lg">
        <div>
            <span className="font-semibold">User ID:</span> {response.userid}
            </div>
            <div>
                <span className="font-semibold">ID:</span> {response.id}
</div>
            <div>
                <span className="font-semibold">Title:</span> {response.title}
                </div>
     
      <Link href="/albums">Back to Albums</Link>
        </div> 
    </div>  
    </div>
  );
};
export default DynamicAlbum;