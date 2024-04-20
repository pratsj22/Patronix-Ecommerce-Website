import React, { useState } from "react";
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    ShoppingBagIcon,
    UserCircleIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";

function SidebarWithBurgerMenu() {
    const [open, setOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const user = useSelector((data) => data.userData.user)
    const [logout, setLogout] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleLogout = () => {
        setLogout(!logout);
        if(!logout){
            closeDrawer()
        }
    }
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    return (
        <>
            <MenuIcon fontSize="large" onClick={openDrawer} />
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <div className="mb-2 flex items-center justify-between gap-4 p-4">
                        <Typography variant="h5" className=" text-xl" color="blue-gray">
                            Patronix
                        </Typography>
                        <CloseIcon fontSize="large" onClick={closeDrawer} />
                    </div>
                    <List>
                        <Accordion
                            open={open}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open? "rotate-180" : ""
                                        }`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open}>
                                <AccordionHeader
                                    onClick={() => handleOpen()}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix>
                                        <CategoryIcon className="h-5 w-5 mr-1" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        Categories
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <Link to="/products/1" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Mixers & Grinders
                                        </ListItem>
                                    </Link>
                                    <Link to="/products/2" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Breakfast Appliances
                                        </ListItem>
                                    </Link>
                                    <Link to="/products/3" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Heating Appliances
                                        </ListItem>
                                    </Link>
                                    <Link to="/products/4" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Personal Grooming Appliances
                                        </ListItem>
                                    </Link>
                                    <Link to="/products/5" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Fans
                                        </ListItem>
                                    </Link>
                                    <Link to="/products/6" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Vacuum Cleaners
                                        </ListItem>
                                    </Link>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <hr className="my-2 border-blue-gray-50" />
                        <Link to="/user/profile" onClick={closeDrawer}>
                            <ListItem>
                                <ListItemPrefix>
                                    <UserCircleIcon className="h-5 w-5 mr-1" />
                                </ListItemPrefix>
                                My Profile
                            </ListItem>
                        </Link>
                        <Link to="/products/1" onClick={closeDrawer}>
                            <ListItem>
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5 mr-1" />
                                </ListItemPrefix>
                                Orders
                            </ListItem>
                        </Link>
                        {user ? <ListItem onClick={()=>handleLogout()}>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5 mr-1" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                            :
                            <Link to="/user/login">
                            <ListItem onClick={closeDrawer}>
                                <ListItemPrefix>
                                    <PowerIcon className="h-5 w-5 mr-1" />
                                </ListItemPrefix>
                                Signin/Login
                            </ListItem>
                            </Link>
                            }
                    </List>
                </Card>
            {logout && <LogoutButton setLogout={setLogout} />}
            </Drawer>
        </>
    );
}

export default SidebarWithBurgerMenu;