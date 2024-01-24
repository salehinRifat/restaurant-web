import Cover from "../../shared/cover/Cover";
import bannerImg from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const arr = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    let initialIndex = arr.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [salad] = useMenu('salad');
    const [pizza] = useMenu('pizza');
    const [soup] = useMenu('soup');
    const [dessert] = useMenu('dessert');
    const [drinks] = useMenu('drinks');

    return (

        <>
            <div>
                <Cover title="our shop" subtitle="would you like to try a dish?" img={bannerImg}></Cover>
            </div>
            <div className="px-20">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center my-5">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {salad.map((items) => <OrderTab key={items._id} items={items}></OrderTab>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {pizza.map((items) => <OrderTab key={items._id} items={items}></OrderTab>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {soup.map((items) => <OrderTab key={items._id} items={items}></OrderTab>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {dessert.map((items) => <OrderTab key={items._id} items={items}></OrderTab>)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {drinks.map((items) => <OrderTab key={items._id} items={items}></OrderTab>)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Order;