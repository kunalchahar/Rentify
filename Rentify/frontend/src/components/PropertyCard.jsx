import {
   Card,
   CardHeader,
   CardBody,
   Typography,
   Button,
} from "@material-tailwind/react";

export function PropertyCard({ data }) {
   console.log(data)
   return (
      <div className="flex flex-col gap-6">
      {data.map((item, index) =>
         
            <Card key={index} className="w-full h-[22rem] max-w-[64rem] w-[64rem] flex-row">
               <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
               >
                  <img
                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                     alt="card-image"
                     className="h-full w-full object-cover"
                  />
               </CardHeader>
               <CardBody>
                  <Typography variant="h5" color="blue" className="mb-2">
                     Price - Rs.{item.price}
                  </Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                     {item.bhk} BHK Flat
                  </Typography>
                  <Typography color="gray" className="mb-2 font-normal ">
                     <span className="font-semibold text-lg">Address -</span> {item.address}
                  </Typography>
                  <Typography color="gray" className="mb-2 font-normal">
                     <span className="font-semibold">Description -</span> {item.description}
                  </Typography>
                  <Typography color="gray" className="mb-2 font-normal">
                     <span className="font-semibold">Nearby Colleges -</span> {item.nearbyColleges}
                  </Typography>
                  <Typography color="gray" className="mb-2 font-normal">
                     <span className="font-semibold">Nearby Hospitals -</span> {item.nearbyHospitals}
                  </Typography>
                  <a href="#" className="inline-block">
                     <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2}
                           className="h-4 w-4"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                           />
                        </svg>
                     </Button>
                  </a>
               </CardBody>
            </Card>
         )}</div>
   );
}