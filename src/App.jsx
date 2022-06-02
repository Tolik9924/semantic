import './App.css';
import React, { useState } from 'react';

import MenuAndNameOfUser from './Components/MenuAndNameOfUser/MenuAndNameOfUser';
import Main from './Components/Main/Main';
import Modal from './Components/Modal/Modal';
import AddCustomer from './Components/AddCustomer/AddCustomer';

const App = () =>  {

    const data = [
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses',
            price: 50,
            countVariations: 14
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple Test',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/343/343318.png',
            name: 'Hoodie with Zipper',
            price: 45,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1785/1785278.png',
            name: 'Hoodie',
            price: 42,
            countVariations: 4
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/957/premium/957033.png?token=exp=1654110302~hmac=de93ebaac4bec8df38c4b024ab2e4005',
            name: 'Hoodie with Pocket',
            price: 35,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/2912/premium/2912436.png?token=exp=1654110345~hmac=9098d76711c988db60ec46f66d348930',
            name: 'Belt',
            price: 24.55,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1811/premium/1811558.png?token=exp=1654110369~hmac=d71a92c0e68ec53f005ef06ad454a844',
            name: 'Long Steeve Tee',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/5258/5258076.png',
            name: 'Light',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1062/premium/1062936.png?token=exp=1654110466~hmac=7e21eb3abad55c5eeb7132e9b637271f',
            name: 'Copper Topped Lantern',
            price: 22.10,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses',
            price: 50,
            countVariations: 14
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple Test',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/343/343318.png',
            name: 'Hoodie with Zipper',
            price: 45,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1785/1785278.png',
            name: 'Hoodie',
            price: 42,
            countVariations: 4
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/957/premium/957033.png?token=exp=1654110302~hmac=de93ebaac4bec8df38c4b024ab2e4005',
            name: 'Hoodie with Pocket',
            price: 35,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/2912/premium/2912436.png?token=exp=1654110345~hmac=9098d76711c988db60ec46f66d348930',
            name: 'Belt',
            price: 24.55,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1811/premium/1811558.png?token=exp=1654110369~hmac=d71a92c0e68ec53f005ef06ad454a844',
            name: 'Long Steeve Tee',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/5258/5258076.png',
            name: 'Light',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1062/premium/1062936.png?token=exp=1654110466~hmac=7e21eb3abad55c5eeb7132e9b637271f',
            name: 'Copper Topped Lantern',
            price: 22.10,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses',
            price: 50,
            countVariations: 14
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple Test',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/343/343318.png',
            name: 'Hoodie with Zipper',
            price: 45,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1785/1785278.png',
            name: 'Hoodie',
            price: 42,
            countVariations: 4
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/957/premium/957033.png?token=exp=1654110302~hmac=de93ebaac4bec8df38c4b024ab2e4005',
            name: 'Hoodie with Pocket',
            price: 35,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/2912/premium/2912436.png?token=exp=1654110345~hmac=9098d76711c988db60ec46f66d348930',
            name: 'Belt',
            price: 24.55,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1811/premium/1811558.png?token=exp=1654110369~hmac=d71a92c0e68ec53f005ef06ad454a844',
            name: 'Long Steeve Tee',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/5258/5258076.png',
            name: 'Light',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1062/premium/1062936.png?token=exp=1654110466~hmac=7e21eb3abad55c5eeb7132e9b637271f',
            name: 'Copper Topped Lantern',
            price: 22.10,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses',
            price: 50,
            countVariations: 14
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple Test',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/343/343318.png',
            name: 'Hoodie with Zipper',
            price: 45,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1785/1785278.png',
            name: 'Hoodie',
            price: 42,
            countVariations: 4
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/957/premium/957033.png?token=exp=1654110302~hmac=de93ebaac4bec8df38c4b024ab2e4005',
            name: 'Hoodie with Pocket',
            price: 35,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/2912/premium/2912436.png?token=exp=1654110345~hmac=9098d76711c988db60ec46f66d348930',
            name: 'Belt',
            price: 24.55,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1811/premium/1811558.png?token=exp=1654110369~hmac=d71a92c0e68ec53f005ef06ad454a844',
            name: 'Long Steeve Tee',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/5258/5258076.png',
            name: 'Light',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1062/premium/1062936.png?token=exp=1654110466~hmac=7e21eb3abad55c5eeb7132e9b637271f',
            name: 'Copper Topped Lantern',
            price: 22.10,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses',
            price: 50,
            countVariations: 14
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1013/1013553.png',
            name: 'Sunglasses Simple Test',
            price: 50,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/343/343318.png',
            name: 'Hoodie with Zipper',
            price: 45,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/1785/1785278.png',
            name: 'Hoodie',
            price: 42,
            countVariations: 4
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/957/premium/957033.png?token=exp=1654110302~hmac=de93ebaac4bec8df38c4b024ab2e4005',
            name: 'Hoodie with Pocket',
            price: 35,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/2912/premium/2912436.png?token=exp=1654110345~hmac=9098d76711c988db60ec46f66d348930',
            name: 'Belt',
            price: 24.55,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1811/premium/1811558.png?token=exp=1654110369~hmac=d71a92c0e68ec53f005ef06ad454a844',
            name: 'Long Steeve Tee',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/5258/5258076.png',
            name: 'Light',
            price: 25.00,
            countVariations: null
        },
        {
            img: 'https://cdn-icons.flaticon.com/png/512/1062/premium/1062936.png?token=exp=1654110466~hmac=7e21eb3abad55c5eeb7132e9b637271f',
            name: 'Copper Topped Lantern',
            price: 22.10,
            countVariations: null
        },
    ];

    const [selectCustomer, setSelectCustomer] = useState(true);

  return (
    <div className="app">
      <MenuAndNameOfUser />
      <Main data={data} 
            selectCustomer={selectCustomer}
            setSelectCustomer={setSelectCustomer} />
      <Modal active={selectCustomer}
             setActive={setSelectCustomer}>
          <AddCustomer />
      </Modal>
    </div>
  )
}

export default App;
