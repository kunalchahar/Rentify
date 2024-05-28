import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxXMarkIcon, PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tooltip,
  IconButton,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Dialog,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { deleteProperty } from "../StoreSlices/propertiesSlice";
import EditPropertyForm from "../modules/Seller/EditPropertyForm";

const TABS = ["All", "Active", "Inactive"].map(label => ({ label, value: label.toLowerCase() }));
const TABLE_HEAD = ["Description", "Address", "BHK", "Price", "Locality", "Nearby Hospitals", "Nearby Colleges", "Date Added", ""];

const DataTable = ({ properties }) => {
  const dispatch = useDispatch();
  const [editPropertyData, setEditPropertyData] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleDelete = (propertyId) => {
    dispatch(deleteProperty(propertyId)
  )};

  const handleEdit = (propertyId) => {
    const property = properties.find(property => property._id === propertyId);
    setEditPropertyData(property);
    setOpenEditDialog((cur)=>(!cur));
  };

  return (
    <div className="h-screen max-h-screen">
      <Card className="h-full w-full pt-6 px-4">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">Properties List</Typography>
              <Typography color="gray" className="mt-1 font-normal">See information about all properties</Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">View All</Button>
              <Button className="flex items-center gap-3" color="blue" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Property
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>&nbsp;&nbsp;{label}&nbsp;&nbsp;</Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">{head}</Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => {
                const {_id, description, address, bhk, price, locality, nearbyHospitals, nearbyColleges, createdAt } = property;
                const isLast = index === properties.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                const rowColor = index % 2 === 0 ? "bg-white" : "bg-gray-100";

                return (
                  <tr key={description} className={rowColor}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{description}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{address}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{bhk}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{price}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{locality}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{nearbyHospitals}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{nearbyColleges}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">{createdAt}</Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit Property"><IconButton variant="text" onClick={()=>handleEdit(_id)}><PencilIcon className="h-4 w-4" /></IconButton></Tooltip>
                      <Tooltip content="Delete Property"><IconButton variant="text" onClick={()=>handleDelete(_id)}><ArchiveBoxXMarkIcon className="h-4 w-4" /></IconButton></Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">Page 1 of 10</Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">Previous</Button>
            <Button variant="outlined" size="sm">Next</Button>
          </div>
        </CardFooter>
      </Card>
      <Dialog size="xs" open={openEditDialog} handler={handleEdit} onClose={() => setOpenEditDialog(false)}>
        <EditPropertyForm open={openEditDialog} property={editPropertyData} onClose={() => setOpenEditDialog(false)} tableHeaders={TABLE_HEAD} />
      </Dialog>
    </div>
  );
};

export default DataTable;
